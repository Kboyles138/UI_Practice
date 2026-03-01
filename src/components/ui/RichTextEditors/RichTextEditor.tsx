"use client";

import { useRef, useEffect } from "react";

export interface RichTextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  minHeight?: string;
  className?: string;
}

export function RichTextEditor({
  value = "",
  onChange,
  placeholder = "Write something...",
  label,
  error,
  disabled = false,
  minHeight = "120px",
  className = "",
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = editorRef.current;
    if (!el || el.textContent === value) return;
    el.textContent = value;
  }, [value]);

  const handleInput = () => {
    const html = editorRef.current?.innerHTML ?? "";
    onChange?.(html);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <div className="rounded-lg border border-neutral-200 dark:border-neutral-600">
        <div className="flex border-b border-neutral-200 p-1 dark:border-neutral-600">
          <button
            type="button"
            className="rounded p-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => document.execCommand("bold")}
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            className="rounded p-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => document.execCommand("italic")}
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            className="rounded p-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => document.execCommand("underline")}
            title="Underline"
          >
            <u>U</u>
          </button>
        </div>
        <div
          ref={editorRef}
          contentEditable={!disabled}
          onInput={handleInput}
          data-placeholder={placeholder}
          className={[
            "min-w-0 overflow-auto px-3 py-2 text-sm",
            "bg-white dark:bg-neutral-900",
            "text-neutral-900 dark:text-neutral-100",
            "focus:outline-none",
            "empty:before:content-[attr(data-placeholder)] empty:before:text-neutral-400",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{ minHeight }}
          suppressContentEditableWarning
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
