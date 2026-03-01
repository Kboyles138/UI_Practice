import { Spinner } from "../Spinners/Spinner";

export interface LoadingIndicatorProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

export function LoadingIndicator({ size = "md", label = "Loading..." }: LoadingIndicatorProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-8">
      <Spinner size={size} />
      {label && <p className="text-sm text-neutral-500 dark:text-neutral-400">{label}</p>}
    </div>
  );
}
