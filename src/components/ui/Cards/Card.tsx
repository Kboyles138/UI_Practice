import { type HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "outlined" | "filled";
}

const variantStyles = {
  elevated:
    "bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg transition-shadow border border-neutral-200/50 dark:border-neutral-700/50",
  outlined:
    "bg-transparent border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors",
  filled: "bg-neutral-100 dark:bg-neutral-800/50 border border-transparent",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "elevated", className = "", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["rounded-xl p-6", variantStyles[variant], className].filter(Boolean).join(" ")}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = ({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`mb-4 ${className}`} {...props} />
);

export const CardTitle = ({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={`text-xl font-semibold text-neutral-900 dark:text-neutral-100 ${className}`}
    {...props}
  />
);

export const CardDescription = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`mt-1 text-sm text-neutral-500 dark:text-neutral-400 ${className}`} {...props} />
);

export const CardContent = ({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...props} />
);

export const CardFooter = ({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`mt-4 flex items-center gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-700 ${className}`}
    {...props}
  />
);
