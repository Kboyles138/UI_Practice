"use client";

import { useId, type InputHTMLAttributes } from "react";

export type RadioButtonSize = "sm" | "md" | "lg";
export type RadioButtonColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "warning"
  | "error";

export interface RadioOption {
  value: string;
  label: string;
  /** Supporting/description text below the label */
  supportingText?: string;
  /** Icon to display before the label (radio + icon + text layout) */
  icon?: React.ReactNode;
}

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  options: RadioOption[];
  name: string;
  label?: string;
  error?: string;
  /** Size. Default: "md" */
  size?: RadioButtonSize;
  /** Color when selected. Default: "primary" */
  color?: RadioButtonColor;
  /** Layout: stacked (vertical) or horizontal */
  orientation?: "stacked" | "horizontal";
}

const outerSizeStyles: Record<RadioButtonSize, string> = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const innerSizeStyles: Record<RadioButtonSize, string> = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5",
};

const labelSizeStyles: Record<RadioButtonSize, string> = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

const colorStyles: Record<RadioButtonColor, string> = {
  primary:
    "border-neutral-300 dark:border-neutral-600 peer-checked:border-brand-primary peer-focus-visible:ring-2 peer-focus-visible:ring-brand-primary-500/50 peer-focus-visible:ring-offset-0",
  secondary:
    "border-neutral-300 dark:border-neutral-600 peer-checked:border-brand-secondary peer-focus-visible:ring-2 peer-focus-visible:ring-brand-secondary-500/50 peer-focus-visible:ring-offset-0",
  tertiary:
    "border-neutral-300 dark:border-neutral-600 peer-checked:border-brand-accent peer-focus-visible:ring-2 peer-focus-visible:ring-brand-accent-500/50 peer-focus-visible:ring-offset-0",
  warning:
    "border-neutral-300 dark:border-neutral-600 peer-checked:border-feedback-warning peer-focus-visible:ring-2 peer-focus-visible:ring-feedback-warning-500/50 peer-focus-visible:ring-offset-0",
  error:
    "border-neutral-300 dark:border-neutral-600 peer-checked:border-feedback-error peer-focus-visible:ring-2 peer-focus-visible:ring-feedback-error-500/50 peer-focus-visible:ring-offset-0",
};

const innerColorStyles: Record<RadioButtonColor, string> = {
  primary:
    "peer-checked:[&_.radio-inner]:bg-brand-primary peer-checked:[&_.radio-inner]:opacity-100",
  secondary:
    "peer-checked:[&_.radio-inner]:bg-brand-secondary peer-checked:[&_.radio-inner]:opacity-100",
  tertiary:
    "peer-checked:[&_.radio-inner]:bg-brand-accent peer-checked:[&_.radio-inner]:opacity-100",
  warning:
    "peer-checked:[&_.radio-inner]:bg-feedback-warning peer-checked:[&_.radio-inner]:opacity-100",
  error:
    "peer-checked:[&_.radio-inner]:bg-feedback-error peer-checked:[&_.radio-inner]:opacity-100",
};

export function RadioButton({
  options,
  name,
  label,
  error,
  id,
  size = "md",
  color = "primary",
  orientation = "stacked",
  disabled,
  required,
  className = "",
  ...props
}: RadioButtonProps) {
  const groupId = useId();
  const baseId = id ?? groupId;
  const labelId = `${baseId}-label`;

  return (
    <div
      className="w-full"
      role="radiogroup"
      aria-labelledby={label ? labelId : undefined}
      aria-required={required}
      aria-invalid={!!error}
      aria-describedby={error ? `${baseId}-error` : undefined}
    >
      {label && (
        <p
          id={labelId}
          className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </p>
      )}
      <div
        className={
          orientation === "horizontal"
            ? "flex flex-row flex-wrap gap-4 gap-y-3"
            : "flex flex-col gap-2"
        }
      >
        {options.map((option) => (
          <label
            key={option.value}
            htmlFor={`${baseId}-${option.value}`}
            className={[
              "inline-flex cursor-pointer items-start gap-3",
              disabled && "cursor-not-allowed opacity-50",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span className="relative mt-0.5 shrink-0">
              <input
                id={`${baseId}-${option.value}`}
                type="radio"
                name={name}
                value={option.value}
                disabled={disabled}
                className="peer absolute h-0 w-0 opacity-0"
                aria-invalid={!!error}
                aria-describedby={error ? `${baseId}-error` : undefined}
                required={required}
                {...props}
              />
              <span
                className={[
                  "flex items-center justify-center rounded-full border-2 transition-colors",
                  "peer-focus-visible:outline-none",
                  "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
                  outerSizeStyles[size],
                  colorStyles[color],
                  innerColorStyles[color],
                  error && "!border-feedback-error",
                  className,
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden
              >
                <span
                  className={[
                    "radio-inner rounded-full opacity-0 transition-opacity",
                    innerSizeStyles[size],
                  ].join(" ")}
                />
              </span>
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="inline-flex items-center gap-2">
                {option.icon && (
                  <span
                    className={[
                      "shrink-0 text-neutral-500 dark:text-neutral-400",
                      size === "sm" && "flex h-4 w-4 items-center justify-center",
                      size === "md" && "flex h-5 w-5 items-center justify-center",
                      size === "lg" && "flex h-6 w-6 items-center justify-center",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-hidden
                  >
                    {option.icon}
                  </span>
                )}
                <span
                  className={[
                    "font-medium text-neutral-700 dark:text-neutral-300",
                    labelSizeStyles[size],
                  ].join(" ")}
                >
                  {option.label}
                </span>
              </span>
              {option.supportingText && (
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {option.supportingText}
                </span>
              )}
            </span>
          </label>
        ))}
      </div>
      {error && (
        <p id={`${baseId}-error`} className="mt-1.5 text-sm text-feedback-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
