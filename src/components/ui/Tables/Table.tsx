import { type HTMLAttributes } from "react";

export interface TableProps extends HTMLAttributes<HTMLTableElement> {}

export function Table({ className = "", ...props }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full border-collapse text-left text-sm ${className}`} {...props} />
    </div>
  );
}

export function TableHead({ className = "", ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={`border-b border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/50 ${className}`}
      {...props}
    />
  );
}

export function TableBody({ className = "", ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={className} {...props} />;
}

export function TableRow({ className = "", ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={`border-b border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800/50 ${className}`}
      {...props}
    />
  );
}

export function TableHeader({ className = "", ...props }: HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100 ${className}`}
      {...props}
    />
  );
}

export function TableCell({ className = "", ...props }: HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={`px-4 py-3 text-neutral-700 dark:text-neutral-300 ${className}`} {...props} />
  );
}
