"use client";

import { forwardRef } from "react";

export interface DatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  hint?: string;
  id?: string;
  disabled?: boolean;
  min?: string;
  max?: string;
  className?: string;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    { value, onChange, label, error, hint, id, disabled = false, min, max, className = "" },
    ref
  ) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s/g, "-");

    return (
      <div className={`w-full ${className}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type="date"
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          min={min}
          max={max}
          className={[
            "w-full rounded-lg border px-3 py-2 text-base",
            "bg-white dark:bg-neutral-900",
            "border-neutral-300 dark:border-neutral-600",
            "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-red-500",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-invalid={!!error}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
        {hint && !error && <p className="mt-1.5 text-sm text-neutral-500">{hint}</p>}
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";
