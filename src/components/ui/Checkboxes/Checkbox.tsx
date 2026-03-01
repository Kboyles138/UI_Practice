import { forwardRef, type InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const checkboxId = id ?? label?.toLowerCase().replace(/\s/g, "-");

    return (
      <div className="w-full">
        <label htmlFor={checkboxId} className="inline-flex cursor-pointer items-center gap-3">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={[
              "h-4 w-4 rounded border-neutral-300 text-primary-500",
              "focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-0",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red-500",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
            aria-invalid={!!error}
            aria-describedby={error ? `${checkboxId}-error` : undefined}
            {...props}
          />
          {label && (
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {label}
            </span>
          )}
        </label>
        {error && (
          <p id={`${checkboxId}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
