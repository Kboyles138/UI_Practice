"use client";

import { useState } from "react";

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
}

export function MultiSelect({
  options,
  value = [],
  onChange,
  label,
  placeholder = "Select options...",
  error,
  hint,
  id,
  disabled = false,
  className = "",
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectId = id ?? label?.toLowerCase().replace(/\s/g, "-");

  const toggleOption = (optValue: string) => {
    const newValue = value.includes(optValue)
      ? value.filter((v) => v !== optValue)
      : [...value, optValue];
    onChange?.(newValue);
  };

  const selectedLabels = options.filter((opt) => value.includes(opt.value)).map((opt) => opt.label);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <button
          id={selectId}
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={[
            "w-full rounded-lg border px-3 py-2 text-left text-base",
            "bg-white dark:bg-neutral-900",
            "border-neutral-300 dark:border-neutral-600",
            "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-red-500",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {selectedLabels.length > 0 ? (
            <span className="text-neutral-900 dark:text-neutral-100">
              {selectedLabels.join(", ")}
            </span>
          ) : (
            <span className="text-neutral-400 dark:text-neutral-500">{placeholder}</span>
          )}
        </button>
        {isOpen && (
          <div
            className="absolute z-10 mt-1 w-full rounded-lg border border-neutral-200 bg-white p-1 shadow-lg dark:border-neutral-600 dark:bg-neutral-900"
            role="listbox"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={value.includes(opt.value)}
                onClick={() => toggleOption(opt.value)}
                className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                  value.includes(opt.value) ? "bg-primary-100 dark:bg-primary-900" : ""
                } ${className}`}
              >
                <span className="mr-2">{value.includes(opt.value) ? "✓" : "○"}</span>
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      {hint && !error && <p className="mt-1.5 text-sm text-neutral-500">{hint}</p>}
    </div>
  );
}
