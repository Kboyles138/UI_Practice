"use client";

import { forwardRef, useEffect, useId, useRef, useState, type InputHTMLAttributes } from "react";

export type CheckboxVariant =
  | "default"
  | "group"
  | "selectAll"
  | "supporting"
  | "inline"
  | "partial";
export type CheckboxSize = "sm" | "md" | "lg";
export type CheckboxColor = "primary" | "secondary" | "tertiary" | "warning" | "error";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  label?: string;
  error?: string;
  /** Visual variant. Default: "default" */
  variant?: CheckboxVariant;
  /** Size. Default: "md" */
  size?: CheckboxSize;
  /** Color when checked. Default: "primary" */
  color?: CheckboxColor;
  /** Supporting/description text (for supporting variant) */
  supportingText?: string;
  /** Indeterminate/partial state (minus icon) */
  indeterminate?: boolean;
}

const sizeStyles: Record<CheckboxSize, string> = {
  sm: "h-3.5 w-3.5 rounded",
  md: "h-4 w-4 rounded",
  lg: "h-5 w-5 rounded-md",
};

const labelSizeStyles: Record<CheckboxSize, string> = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

const colorStyles: Record<CheckboxColor, string> = {
  primary:
    "border-neutral-300 dark:border-neutral-600 peer-checked:bg-brand-primary peer-checked:border-brand-primary peer-data-[indeterminate]:bg-brand-primary peer-data-[indeterminate]:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary-500/50 focus-visible:ring-offset-0",
  secondary:
    "border-neutral-300 dark:border-neutral-600 peer-checked:bg-brand-secondary peer-checked:border-brand-secondary peer-data-[indeterminate]:bg-brand-secondary peer-data-[indeterminate]:border-brand-secondary focus-visible:ring-2 focus-visible:ring-brand-secondary-500/50 focus-visible:ring-offset-0",
  tertiary:
    "border-neutral-300 dark:border-neutral-600 peer-checked:bg-brand-accent peer-checked:border-brand-accent peer-data-[indeterminate]:bg-brand-accent peer-data-[indeterminate]:border-brand-accent focus-visible:ring-2 focus-visible:ring-brand-accent-500/50 focus-visible:ring-offset-0",
  warning:
    "border-neutral-300 dark:border-neutral-600 peer-checked:bg-feedback-warning peer-checked:border-feedback-warning peer-data-[indeterminate]:bg-feedback-warning peer-data-[indeterminate]:border-feedback-warning focus-visible:ring-2 focus-visible:ring-feedback-warning-500/50 focus-visible:ring-offset-0",
  error:
    "border-neutral-300 dark:border-neutral-600 peer-checked:bg-feedback-error peer-checked:border-feedback-error peer-data-[indeterminate]:bg-feedback-error peer-data-[indeterminate]:border-feedback-error focus-visible:ring-2 focus-visible:ring-feedback-error-500/50 focus-visible:ring-offset-0",
};

const iconSizeMap: Record<CheckboxSize, number> = {
  sm: 10,
  md: 12,
  lg: 14,
};

function CheckIcon({ size, className = "" }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MinusIcon({ size, className = "" }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      variant = "default",
      size = "md",
      color = "primary",
      supportingText,
      indeterminate = false,
      id,
      className = "",
      required,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const generatedId = useId();
    const checkboxId = id ?? generatedId;

    const setRef = (el: HTMLInputElement | null) => {
      (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
    };

    useEffect(() => {
      const input = inputRef.current;
      if (input) {
        input.indeterminate = indeterminate;
        if (indeterminate) {
          input.setAttribute("data-indeterminate", "");
        } else {
          input.removeAttribute("data-indeterminate");
        }
      }
    }, [indeterminate]);

    const isInline = variant === "inline";
    const isSupporting = variant === "supporting";

    const labelWrapperClasses = [
      "inline-flex cursor-pointer items-start gap-3",
      !isInline && "w-full",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={isInline ? "inline-flex pl-3 pr-1" : "w-full"}>
        <label htmlFor={checkboxId} className={labelWrapperClasses}>
          <span className="relative mt-0.5 shrink-0">
            <input
              ref={setRef}
              id={checkboxId}
              type="checkbox"
              className="peer absolute h-0 w-0 opacity-0"
              aria-invalid={!!error}
              aria-required={required}
              aria-describedby={
                error ? `${checkboxId}-error` : supportingText ? `${checkboxId}-hint` : undefined
              }
              aria-checked={indeterminate ? "mixed" : undefined}
              required={required}
              {...props}
            />
            <span
              className={[
                "relative flex items-center justify-center border-2 transition-colors",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-0 peer-focus-visible:outline-none",
                "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
                "peer-checked:[&_.check-icon]:opacity-100 peer-data-[indeterminate]:[&_.check-icon]:opacity-0",
                "peer-data-[indeterminate]:[&_.minus-icon]:opacity-100",
                sizeStyles[size],
                colorStyles[color],
                error && "!border-feedback-error",
                className,
              ]
                .filter(Boolean)
                .join(" ")}
              aria-hidden
            >
              <span className="check-icon absolute inset-0 flex items-center justify-center opacity-0 transition-opacity">
                <CheckIcon size={iconSizeMap[size]} className="block shrink-0" />
              </span>
              <span className="minus-icon absolute inset-0 flex items-center justify-center opacity-0 transition-opacity">
                <MinusIcon size={iconSizeMap[size]} className="block shrink-0" />
              </span>
            </span>
          </span>
          {(label || supportingText) && (
            <span className="flex flex-col gap-0.5">
              {label && (
                <span
                  className={[
                    "font-medium text-neutral-700 dark:text-neutral-300",
                    labelSizeStyles[size],
                  ].join(" ")}
                >
                  {label}
                </span>
              )}
              {isSupporting && supportingText && (
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {supportingText}
                </span>
              )}
            </span>
          )}
        </label>
        {error && (
          <p id={`${checkboxId}-error`} className="mt-1.5 text-sm text-feedback-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export interface CheckboxOption {
  value: string;
  label: string;
  supportingText?: string;
}

export interface CheckboxGroupProps {
  label?: string;
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  size?: CheckboxSize;
  color?: CheckboxColor;
  error?: string;
  className?: string;
}

export function CheckboxGroup({
  label,
  options,
  value: controlledValue,
  onChange,
  size = "md",
  color = "primary",
  error,
  className = "",
}: CheckboxGroupProps) {
  const [internalValue, setInternalValue] = useState<string[]>([]);
  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const handleChange = (optionValue: string, checked: boolean) => {
    const next = checked ? [...value, optionValue] : value.filter((v) => v !== optionValue);
    setValue(next);
  };

  return (
    <div className={className}>
      {label && (
        <p className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">{label}</p>
      )}
      <div className="space-y-3">
        {options.map((opt) => (
          <Checkbox
            key={opt.value}
            variant="supporting"
            size={size}
            color={color}
            label={opt.label}
            supportingText={opt.supportingText}
            checked={value.includes(opt.value)}
            onChange={(e) => handleChange(opt.value, e.target.checked)}
          />
        ))}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-feedback-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export interface CheckboxSelectAllGroupProps {
  label?: string;
  selectAllLabel?: string;
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  size?: CheckboxSize;
  color?: CheckboxColor;
  error?: string;
  className?: string;
}

export function CheckboxSelectAllGroup({
  label,
  selectAllLabel = "Select all",
  options,
  value: controlledValue,
  onChange,
  size = "md",
  color = "primary",
  error,
  className = "",
}: CheckboxSelectAllGroupProps) {
  const [internalValue, setInternalValue] = useState<string[]>([]);
  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;
  const allSelected = options.length > 0 && value.length === options.length;
  const someSelected = value.length > 0;

  const handleSelectAll = (checked: boolean) => {
    setValue(checked ? options.map((o) => o.value) : []);
  };

  const handleChange = (optionValue: string, checked: boolean) => {
    const next = checked ? [...value, optionValue] : value.filter((v) => v !== optionValue);
    setValue(next);
  };

  return (
    <div className={className}>
      {label && (
        <p className="mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">{label}</p>
      )}
      <div className="space-y-3">
        <Checkbox
          variant="default"
          size={size}
          color={color}
          label={selectAllLabel}
          indeterminate={someSelected && !allSelected}
          checked={allSelected}
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
        <div className="ml-6 border-l-2 border-neutral-200 pl-4 dark:border-neutral-700">
          <div className="space-y-3">
            {options.map((opt) => (
              <Checkbox
                key={opt.value}
                variant="supporting"
                size={size}
                color={color}
                label={opt.label}
                supportingText={opt.supportingText}
                checked={value.includes(opt.value)}
                onChange={(e) => handleChange(opt.value, e.target.checked)}
              />
            ))}
          </div>
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-feedback-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
