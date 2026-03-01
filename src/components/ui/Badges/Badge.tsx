import { type HTMLAttributes } from "react";

export type BadgeVariant = "default" | "primary" | "success" | "warning" | "error" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200",
  primary: "bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-200",
  success: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
  warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
  error: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200",
  outline: "border-2 border-neutral-300 bg-transparent dark:border-neutral-600",
};

export function Badge({ variant = "default", className = "", ...props }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
