"use client";

import { forwardRef } from "react";

export interface DateRangePickerProps {
  startValue?: string;
  endValue?: string;
  onStartChange?: (value: string) => void;
  onEndChange?: (value: string) => void;
  label?: string;
  error?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
}

export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      startValue,
      endValue,
      onStartChange,
      onEndChange,
      label,
      error,
      id,
      disabled = false,
      className = "",
    },
    ref
  ) => {
    const groupId = id ?? "date-range";

    return (
      <div ref={ref} className={`w-full ${className}`}>
        {label && (
          <p className="mb-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {label}
          </p>
        )}
        <div className="flex gap-2">
          <input
            id={`${groupId}-start`}
            type="date"
            value={startValue ?? ""}
            onChange={(e) => onStartChange?.(e.target.value)}
            disabled={disabled}
            className={[
              "flex-1 rounded-lg border px-3 py-2 text-base",
              "bg-white dark:bg-neutral-900",
              "border-neutral-300 dark:border-neutral-600",
              "focus:outline-none focus:ring-2 focus:ring-primary-500/50",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red-500",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label="Start date"
          />
          <span className="flex items-center text-neutral-500">to</span>
          <input
            id={`${groupId}-end`}
            type="date"
            value={endValue ?? ""}
            onChange={(e) => onEndChange?.(e.target.value)}
            disabled={disabled}
            className={[
              "flex-1 rounded-lg border px-3 py-2 text-base",
              "bg-white dark:bg-neutral-900",
              "border-neutral-300 dark:border-neutral-600",
              "focus:outline-none focus:ring-2 focus:ring-primary-500/50",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red-500",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label="End date"
          />
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

DateRangePicker.displayName = "DateRangePicker";
