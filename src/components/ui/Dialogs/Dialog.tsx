"use client";

import { useEffect } from "react";
import { Button } from "../Buttons/Button";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
}

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
}: DialogProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <div
        role="alertdialog"
        aria-modal
        aria-labelledby="dialog-title"
        aria-describedby={description ? "dialog-description" : undefined}
        className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-neutral-900"
      >
        <h2
          id="dialog-title"
          className="text-lg font-semibold text-neutral-900 dark:text-neutral-100"
        >
          {title}
        </h2>
        {description && (
          <p
            id="dialog-description"
            className="mt-2 text-sm text-neutral-600 dark:text-neutral-400"
          >
            {description}
          </p>
        )}
        {children && <div className="mt-4">{children}</div>}
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" size="md" onClick={onClose}>
            {cancelLabel}
          </Button>
          {onConfirm && (
            <Button variant="primary" size="md" onClick={onConfirm}>
              {confirmLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
