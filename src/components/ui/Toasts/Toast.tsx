import { type HTMLAttributes } from "react";

export type ToastVariant = "info" | "success" | "warning" | "error";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant;
  title?: string;
  onClose?: () => void;
}

const variantStyles: Record<ToastVariant, string> = {
  info: "bg-white dark:bg-neutral-900 border-l-4 border-blue-500 shadow-lg",
  success: "bg-white dark:bg-neutral-900 border-l-4 border-green-500 shadow-lg",
  warning: "bg-white dark:bg-neutral-900 border-l-4 border-amber-500 shadow-lg",
  error: "bg-white dark:bg-neutral-900 border-l-4 border-red-500 shadow-lg",
};

export function Toast({
  variant = "info",
  title,
  onClose,
  children,
  className = "",
  ...props
}: ToastProps) {
  return (
    <div
      role="alert"
      className={`flex items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3 dark:border-neutral-700 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <div className="flex-1 min-w-0">
        {title && <p className="font-medium text-neutral-900 dark:text-neutral-100">{title}</p>}
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{children}</p>
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
  );
}
