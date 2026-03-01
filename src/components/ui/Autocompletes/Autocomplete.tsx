"use client";

import { useState, useRef, useEffect } from "react";

export interface AutocompleteOption {
  value: string;
  label: string;
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  onChange?: (value: string, label?: string) => void;
  onSearch?: (query: string) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
}

export function Autocomplete({
  options,
  value = "",
  onChange,
  onSearch,
  label,
  placeholder = "Start typing...",
  error,
  hint,
  id,
  disabled = false,
  className = "",
}: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(
    () => options.find((o) => o.value === value)?.label ?? value
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selected = options.find((o) => o.value === value);
    setInputValue(selected?.label ?? value);
  }, [value, options]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectId = id ?? label?.toLowerCase().replace(/\s/g, "-");
  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    onSearch?.(newValue);
  };

  const handleSelect = (opt: AutocompleteOption) => {
    setInputValue(opt.label);
    onChange?.(opt.value, opt.label);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={selectId}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="off"
          className={[
            "w-full rounded-lg border px-3 py-2 text-base",
            "bg-white dark:bg-neutral-900",
            "border-neutral-300 dark:border-neutral-600",
            "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
            "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-red-500 focus:ring-red-500/50 focus:border-red-500",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={`${selectId}-listbox`}
          aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
        />
        {isOpen && (
          <ul
            id={`${selectId}-listbox`}
            role="listbox"
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-neutral-200 bg-white py-1 shadow-lg dark:border-neutral-600 dark:bg-neutral-900"
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={value === opt.value}
                  onClick={() => handleSelect(opt)}
                  className={`cursor-pointer px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                    value === opt.value ? "bg-primary-100 dark:bg-primary-900" : ""
                  }`}
                >
                  {opt.label}
                </li>
              ))
            ) : (
              <li className="px-3 py-4 text-center text-sm text-neutral-500">No results found</li>
            )}
          </ul>
        )}
      </div>
      {error && (
        <p id={`${selectId}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${selectId}-hint`} className="mt-1.5 text-sm text-neutral-500">
          {hint}
        </p>
      )}
    </div>
  );
}
