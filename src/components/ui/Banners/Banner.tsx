import { type HTMLAttributes } from "react";

export type BannerVariant = "info" | "success" | "warning" | "error";

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BannerVariant;
  onDismiss?: () => void;
}

const variantStyles: Record<BannerVariant, string> = {
  info: "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-100",
  success: "bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-100",
  warning: "bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-100",
  error: "bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100",
};

export function Banner({
  variant = "info",
  onDismiss,
  children,
  className = "",
  ...props
}: BannerProps) {
  return (
    <div
      role="banner"
      className={`flex items-center justify-between gap-4 px-4 py-3 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <div className="flex-1 text-sm">{children}</div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="shrink-0 rounded p-1 opacity-70 hover:opacity-100"
          aria-label="Dismiss"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
