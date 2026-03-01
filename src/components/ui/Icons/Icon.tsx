import { type SVGProps } from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  size?: number | "sm" | "md" | "lg";
  children?: React.ReactNode;
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
};

export function Icon({ size = "md", children, className = "", ...props }: IconProps) {
  const pixelSize = typeof size === "number" ? size : sizeMap[size];

  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block shrink-0 ${className}`}
      {...props}
    >
      {children ?? <circle cx="12" cy="12" r="10" />}
    </svg>
  );
}
