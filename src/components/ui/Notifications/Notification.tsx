import { type HTMLAttributes } from "react";

export type NotificationVariant = "info" | "success" | "warning" | "error";

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  variant?: NotificationVariant;
  title?: string;
  timestamp?: string;
  onClose?: () => void;
}

const variantStyles: Record<NotificationVariant, string> = {
  info: "border-l-4 border-blue-500",
  success: "border-l-4 border-green-500",
  warning: "border-l-4 border-amber-500",
  error: "border-l-4 border-red-500",
};

export function Notification({
  variant = "info",
  title,
  timestamp,
  onClose,
  children,
  className = "",
  ...props
}: NotificationProps) {
  return (
    <div
      role="alert"
      className={`rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-md dark:border-neutral-700 dark:bg-neutral-900 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          {title && <p className="font-semibold text-neutral-900 dark:text-neutral-100">{title}</p>}
          {timestamp && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{timestamp}</p>
          )}
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{children}</p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            aria-label="Close"
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
    </div>
  );
}
