import { type HTMLAttributes } from "react";

export interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  id?: string;
}

export function ErrorMessage({ id, children, className = "", ...props }: ErrorMessageProps) {
  if (!children) return null;

  return (
    <p
      id={id}
      role="alert"
      className={`text-sm text-red-500 dark:text-red-400 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
