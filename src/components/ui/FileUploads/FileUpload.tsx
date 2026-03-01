"use client";

import { useState, useRef } from "react";

export interface FileUploadProps {
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function FileUpload({
  onFilesSelected,
  accept,
  multiple = false,
  maxSize,
  label,
  hint,
  error,
  disabled = false,
  className = "",
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files?.length) return;
    const fileArray = Array.from(files);
    const validFiles = maxSize ? fileArray.filter((f) => f.size <= maxSize) : fileArray;
    setSelectedFiles((prev) => (multiple ? [...prev, ...validFiles] : validFiles));
    onFilesSelected?.(validFiles);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <p className="mb-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</p>
      )}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => !disabled && inputRef.current?.click()}
        className={[
          "cursor-pointer rounded-lg border-2 border-dashed px-4 py-8 text-center transition-colors",
          isDragging && !disabled && "border-primary-500 bg-primary-50 dark:bg-primary-900/20",
          !isDragging && "border-neutral-300 dark:border-neutral-600",
          disabled && "cursor-not-allowed opacity-50",
          error && "border-red-500",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={disabled}
          className="hidden"
        />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Drag and drop files here, or click to browse
        </p>
        {maxSize && (
          <p className="mt-1 text-xs text-neutral-500">
            Max size: {(maxSize / 1024).toFixed(0)} KB
          </p>
        )}
      </div>
      {selectedFiles.length > 0 && (
        <ul className="mt-2 space-y-1">
          {selectedFiles.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center justify-between rounded bg-neutral-100 px-3 py-2 text-sm dark:bg-neutral-800"
            >
              <span className="truncate">{file.name}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(i);
                }}
                className="ml-2 text-neutral-500 hover:text-red-500"
                aria-label="Remove file"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
      {error && (
        <p className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      {hint && !error && <p className="mt-1.5 text-sm text-neutral-500">{hint}</p>}
    </div>
  );
}
