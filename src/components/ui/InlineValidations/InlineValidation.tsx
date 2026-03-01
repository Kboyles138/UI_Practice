import { type HTMLAttributes } from "react";

export type ValidationStatus = "error" | "success" | "warning";

export interface InlineValidationProps extends HTMLAttributes<HTMLDivElement> {
  status?: ValidationStatus;
  message?: string;
  id?: string;
}

const messageStyles: Record<ValidationStatus, string> = {
  error: "text-red-500 dark:text-red-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-amber-600 dark:text-amber-400",
};

export function InlineValidation({
  status = "error",
  message,
  id,
  children,
  className = "",
  ...props
}: InlineValidationProps) {
  return (
    <div className={`w-full ${className}`} {...props}>
      {children}
      {message && (
        <p
          id={id}
          role={status === "error" ? "alert" : "status"}
          className={`mt-1.5 text-sm ${messageStyles[status]}`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
