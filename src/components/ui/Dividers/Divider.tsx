import { type HTMLAttributes } from "react";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

export function Divider({ orientation = "horizontal", className = "", ...props }: DividerProps) {
  return (
    <hr
      className={
        orientation === "horizontal"
          ? `my-4 border-0 border-t border-neutral-200 dark:border-neutral-700 ${className}`
          : `mx-4 h-full w-px border-0 border-l border-neutral-200 dark:border-neutral-700 ${className}`
      }
      {...props}
    />
  );
}
