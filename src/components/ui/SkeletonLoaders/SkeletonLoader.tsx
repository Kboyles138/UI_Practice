import { type HTMLAttributes } from "react";

export interface SkeletonLoaderProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
}

export function SkeletonLoader({
  variant = "text",
  width,
  height,
  className = "",
  style,
  ...props
}: SkeletonLoaderProps) {
  const baseStyles = "animate-pulse bg-neutral-200 dark:bg-neutral-700 rounded";
  const variantStyles = {
    text: "h-4",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  const combinedStyle = {
    ...style,
    width: width ?? (variant === "text" ? "100%" : undefined),
    height: height ?? undefined,
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={combinedStyle}
      aria-hidden
      {...props}
    />
  );
}
