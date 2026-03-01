"use client";

import { forwardRef, useState } from "react";

export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  id?: string;
  className?: string;
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled = false,
      label,
      id,
      className = "",
    },
    ref
  ) => {
    const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : uncontrolledChecked;

    const handleClick = () => {
      if (disabled) return;
      const newValue = !checked;
      if (!isControlled) setUncontrolledChecked(newValue);
      onChange?.(newValue);
    };

    const toggleId = id ?? label?.toLowerCase().replace(/\s/g, "-");

    return (
      <div className="w-full">
        <label htmlFor={toggleId} className="inline-flex cursor-pointer items-center gap-3">
          <button
            ref={ref}
            id={toggleId}
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={handleClick}
            className={[
              "relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              checked ? "bg-primary-500" : "bg-neutral-300 dark:bg-neutral-600",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span
              className={[
                "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform",
                "translate-x-0.5 translate-y-0.5",
                checked && "translate-x-5",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          </button>
          {label && (
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {label}
            </span>
          )}
        </label>
      </div>
    );
  }
);

Toggle.displayName = "Toggle";
