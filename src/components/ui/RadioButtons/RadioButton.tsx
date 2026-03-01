import { type InputHTMLAttributes } from "react";

export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  options: RadioOption[];
  name: string;
  label?: string;
  error?: string;
}

export function RadioButton({
  options,
  name,
  label,
  error,
  id,
  className = "",
  ...props
}: RadioButtonProps) {
  const groupId = id ?? name;

  return (
    <div className="w-full">
      {label && (
        <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</p>
      )}
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            htmlFor={`${groupId}-${option.value}`}
            className="inline-flex cursor-pointer items-center gap-3"
          >
            <input
              id={`${groupId}-${option.value}`}
              type="radio"
              name={name}
              value={option.value}
              className={[
                "h-4 w-4 border-neutral-300 text-primary-500",
                "focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-0",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                error && "border-red-500",
                className,
              ]
                .filter(Boolean)
                .join(" ")}
              aria-invalid={!!error}
              aria-describedby={error ? `${groupId}-error` : undefined}
              {...props}
            />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">{option.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p id={`${groupId}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
