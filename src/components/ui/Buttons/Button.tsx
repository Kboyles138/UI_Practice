import { forwardRef, type ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: IconType;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-600 focus-visible:ring-brand-primary-500/50",
  secondary:
    "bg-brand-secondary-100 text-brand-secondary-900 hover:bg-brand-secondary-200 dark:bg-brand-secondary-800 dark:text-white dark:hover:bg-brand-secondary-700 focus-visible:ring-brand-secondary-500/50",
  outline:
    "border-2 border-ui-border bg-transparent hover:bg-ui-surface-100 dark:border-ui-border-600 dark:hover:bg-ui-surface-800 focus-visible:ring-brand-primary-500/50",
  ghost:
    "bg-transparent hover:bg-ui-surface-100 dark:hover:bg-ui-surface-800 focus-visible:ring-brand-primary-500/50",
  danger:
    "bg-feedback-error text-white hover:bg-feedback-error-600 focus-visible:ring-feedback-error-500/50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm rounded-md",
  md: "h-10 px-4 text-base rounded-lg",
  lg: "h-12 px-6 text-lg rounded-lg",
};

// Icon sizes for each button size
const iconSizeMap: Record<ButtonSize, string> = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      disabled,
      icon: Icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref
  ) => {
    const isIconOnly = Icon && !children;

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={[
          "inline-flex items-center justify-center font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && !isIconOnly && "w-full",
          isIconOnly && "p-2", // square padding for icon-only
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {Icon && iconPosition === "left" && (
          <Icon className={`${iconSizeMap[size]} ${isIconOnly ? "" : "mr-2"}`} aria-hidden="true" />
        )}
        {children}
        {Icon && iconPosition === "right" && !isIconOnly && (
          <Icon className={`ml-2 ${iconSizeMap[size]}`} aria-hidden="true" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
