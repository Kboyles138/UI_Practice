import { type HTMLAttributes } from "react";

export interface WarningMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  id?: string;
}

export function WarningMessage({ id, children, className = "", ...props }: WarningMessageProps) {
  if (!children) return null;

  return (
    <p
      id={id}
      role="status"
      className={`text-sm text-amber-600 dark:text-amber-400 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
