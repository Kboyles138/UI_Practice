import { type HTMLAttributes } from "react";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-[3px]",
};

export function Spinner({ size = "md", className = "", ...props }: SpinnerProps) {
  return (
    <div
      className={`animate-spin rounded-full border-neutral-300 border-t-primary-500 dark:border-neutral-600 dark:border-t-primary-400 ${sizeStyles[size]} ${className}`}
      role="status"
      aria-label="Loading"
      {...props}
    />
  );
}
