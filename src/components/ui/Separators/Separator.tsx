import { type HTMLAttributes } from "react";

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

export function Separator({
  orientation = "horizontal",
  decorative = true,
  className = "",
  ...props
}: SeparatorProps) {
  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      className={
        orientation === "horizontal"
          ? `h-px w-full bg-neutral-200 dark:bg-neutral-700 ${className}`
          : `h-full w-px self-stretch bg-neutral-200 dark:bg-neutral-700 ${className}`
      }
      {...props}
    />
  );
}
