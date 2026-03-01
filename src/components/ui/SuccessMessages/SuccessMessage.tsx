import { type HTMLAttributes } from "react";

export interface SuccessMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  id?: string;
}

export function SuccessMessage({ id, children, className = "", ...props }: SuccessMessageProps) {
  if (!children) return null;

  return (
    <p
      id={id}
      role="status"
      className={`text-sm text-green-600 dark:text-green-400 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
