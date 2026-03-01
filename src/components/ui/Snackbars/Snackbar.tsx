import { type HTMLAttributes } from "react";

export type SnackbarVariant = "default" | "success" | "warning" | "error";

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SnackbarVariant;
  action?: React.ReactNode;
}

const variantStyles: Record<SnackbarVariant, string> = {
  default: "bg-neutral-800 text-white dark:bg-neutral-700",
  success: "bg-green-600 text-white dark:bg-green-700",
  warning: "bg-amber-600 text-white dark:bg-amber-700",
  error: "bg-red-600 text-white dark:bg-red-700",
};

export function Snackbar({
  variant = "default",
  action,
  children,
  className = "",
  ...props
}: SnackbarProps) {
  return (
    <div
      role="status"
      className={`flex items-center justify-between gap-4 rounded-lg px-4 py-3 text-sm shadow-lg ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="flex-1">{children}</span>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
