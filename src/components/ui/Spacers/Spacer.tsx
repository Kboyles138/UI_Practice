import { type HTMLAttributes } from "react";

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  xs: "h-1",
  sm: "h-2",
  md: "h-4",
  lg: "h-8",
  xl: "h-12",
};

export function Spacer({ size = "md", className = "", ...props }: SpacerProps) {
  return <div aria-hidden className={`w-full shrink-0 ${sizeMap[size]} ${className}`} {...props} />;
}
