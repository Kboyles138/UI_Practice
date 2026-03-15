"use client";

import { forwardRef, useId, useRef, useState, type InputHTMLAttributes } from "react";
import {
  FiSearch,
  FiEye,
  FiEyeOff,
  FiGlobe,
  FiPhone,
  FiMail,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";
import { FaHashtag } from "react-icons/fa";

export type InputIconMode = "default" | "button" | "none";
export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  /** Accessible name when no visible label is provided */
  ariaLabel?: string;
  error?: string;
  hint?: string;
  /** Input size. Default: "md" */
  size?: InputSize;
  /**
   * Icon display mode:
   * - "default": Static icon (non-clickable)
   * - "button": Icon in a clickable button (PasswordInput: toggles visibility; others: use onIconClick)
   * - "none": No icon shown
   */
  iconMode?: InputIconMode;
  /** Called when iconMode is "button" and user clicks the icon (except PasswordInput which has built-in toggle) */
  onIconClick?: () => void;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "px-2.5 py-1.5 text-sm rounded-md",
  md: "px-3 py-2 text-base rounded-lg",
  lg: "px-4 py-3 text-lg rounded-lg",
};

const iconSizeMap: Record<InputSize, number> = {
  sm: 14,
  md: 18,
  lg: 22,
};

const baseInputClasses = [
  "w-full border",
  "bg-white dark:bg-neutral-900",
  "border-neutral-300 dark:border-neutral-600",
  "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
  "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
  "disabled:opacity-50 disabled:cursor-not-allowed",
];

const iconColor = "text-neutral-400 dark:text-neutral-500";

const iconButtonClasses =
  "flex items-center justify-center p-0.5 -m-0.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-0 min-w-[28px] min-h-[28px]";

interface InputBaseProps extends InputProps {
  rightSlot?: React.ReactNode;
  showRightSlot?: boolean;
  /** For number inputs: offset right so icon sits left of increment spinners */
  rightSlotOffsetForSpinners?: boolean;
  /** Show custom up/down stepper buttons (hides native spinners) */
  showNumberStepper?: boolean;
}

const stepperButtonClasses =
  "flex flex-1 min-h-0 items-center justify-center border-0 bg-transparent text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 dark:text-neutral-500 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed";

function InputBase(
  {
    label,
    ariaLabel,
    error,
    hint,
    id,
    className = "",
    size = "md",
    rightSlot,
    showRightSlot = true,
    rightSlotOffsetForSpinners = false,
    showNumberStepper = false,
    required,
    ...props
  }: InputBaseProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hasRight = showRightSlot && rightSlot;

  const setRef = (el: HTMLInputElement | null) => {
    (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
  };

  const rightSlotPosition =
    rightSlotOffsetForSpinners && showNumberStepper
      ? "right-11" // Left of custom stepper (tighter gap)
      : rightSlotOffsetForSpinners
        ? "right-10"
        : "right-3";

  const stepperInset = size === "sm" ? "top-1 right-1 bottom-1" : "top-1.5 right-1.5 bottom-1.5";
  const stepperRounded = size === "sm" ? "rounded-r-md" : "rounded-r-lg";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-md font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={setRef}
          id={inputId}
          data-custom-spinner={showNumberStepper ? "" : undefined}
          className={[
            ...baseInputClasses,
            sizeStyles[size],
            error && "border-red-500 focus:ring-red-500/50 focus:border-red-500",
            showNumberStepper && "pr-10",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          aria-required={required}
          aria-label={!label && ariaLabel ? ariaLabel : undefined}
          required={required}
          {...props}
        />
        {hasRight && (
          <div className={`absolute top-0 bottom-0 flex items-center ${rightSlotPosition}`}>
            {rightSlot}
          </div>
        )}
        {showNumberStepper && (
          <div
            className={`absolute ${stepperInset} flex flex-col w-6 ${stepperRounded} overflow-hidden`}
          >
            <button
              type="button"
              onClick={() => inputRef.current?.stepUp()}
              className={stepperButtonClasses}
              aria-label="Increase value"
              tabIndex={-1}
            >
              <FiChevronUp size={14} />
            </button>
            <button
              type="button"
              onClick={() => inputRef.current?.stepDown()}
              className={stepperButtonClasses}
              aria-label="Decrease value"
              tabIndex={-1}
            >
              <FiChevronDown size={14} />
            </button>
          </div>
        )}
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-neutral-500">
          {hint}
        </p>
      )}
    </div>
  );
}

const InputBaseWithRef = forwardRef(InputBase);

function wrapIcon(
  icon: React.ReactNode,
  mode: InputIconMode,
  asButton: boolean,
  onClick?: () => void,
  ariaLabel?: string
): React.ReactNode {
  if (mode === "none") return null;
  if (mode === "button" || asButton) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={iconButtonClasses}
        aria-label={ariaLabel}
        tabIndex={-1}
      >
        {icon}
      </button>
    );
  }
  return icon;
}

/** Generic input – accepts any type via props. Prefer specialized inputs when type is known. */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <InputBaseWithRef ref={ref} {...props} />
));
Input.displayName = "Input";

/** Text input (default). */
export const TextInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <InputBaseWithRef ref={ref} type="text" {...props} />
));
TextInput.displayName = "TextInput";

/** Email input with envelope icon. */
export const EmailInput = forwardRef<HTMLInputElement, InputProps>(
  ({ iconMode = "default", size = "md", onIconClick, ...props }, ref) => {
    const icon = <FiMail size={iconSizeMap[size]} className={iconColor} aria-hidden />;
    return (
      <InputBaseWithRef
        ref={ref}
        type="email"
        rightSlot={wrapIcon(icon, iconMode, iconMode === "button", onIconClick, "Email")}
        showRightSlot={iconMode !== "none"}
        {...props}
      />
    );
  }
);
EmailInput.displayName = "EmailInput";

/** Password input with eye toggle to reveal/hide password. */
export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ iconMode = "button", size = "md", ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const iconSize = iconSizeMap[size];
    const icon = visible ? (
      <FiEyeOff size={iconSize} className={iconColor} />
    ) : (
      <FiEye size={iconSize} className={iconColor} />
    );
    const slot =
      iconMode === "none" ? null : (
        <div className="flex items-center justify-center">
          {wrapIcon(
            icon,
            iconMode,
            true,
            () => setVisible((v) => !v),
            visible ? "Hide password" : "Show password"
          )}
        </div>
      );
    return (
      <InputBaseWithRef
        ref={ref}
        type={visible ? "text" : "password"}
        rightSlot={slot}
        showRightSlot={iconMode !== "none"}
        {...props}
      />
    );
  }
);
PasswordInput.displayName = "PasswordInput";

/** Search input with search icon. */
export const SearchInput = forwardRef<HTMLInputElement, InputProps>(
  ({ iconMode = "default", size = "md", onIconClick, ...props }, ref) => {
    const icon = <FiSearch size={iconSizeMap[size]} className={iconColor} aria-hidden />;
    return (
      <InputBaseWithRef
        ref={ref}
        type="search"
        rightSlot={wrapIcon(icon, iconMode, iconMode === "button", onIconClick, "Search")}
        showRightSlot={iconMode !== "none"}
        {...props}
      />
    );
  }
);
SearchInput.displayName = "SearchInput";

/** URL input with globe/website icon. */
export const URLInput = forwardRef<HTMLInputElement, InputProps>(
  ({ iconMode = "default", size = "md", onIconClick, ...props }, ref) => {
    const icon = <FiGlobe size={iconSizeMap[size]} className={iconColor} aria-hidden />;
    return (
      <InputBaseWithRef
        ref={ref}
        type="url"
        rightSlot={wrapIcon(icon, iconMode, iconMode === "button", onIconClick, "Website")}
        showRightSlot={iconMode !== "none"}
        {...props}
      />
    );
  }
);
URLInput.displayName = "URLInput";

/** Numeric input with hashtag icon and custom up/down stepper. */
export const NumberInput = forwardRef<HTMLInputElement, InputProps>(
  ({ iconMode = "default", size = "md", onIconClick, ...props }, ref) => {
    const icon = <FaHashtag size={iconSizeMap[size]} className={iconColor} aria-hidden />;
    return (
      <InputBaseWithRef
        ref={ref}
        type="number"
        rightSlot={wrapIcon(icon, iconMode, iconMode === "button", onIconClick, "Number")}
        showRightSlot={iconMode !== "none"}
        rightSlotOffsetForSpinners
        showNumberStepper
        {...props}
      />
    );
  }
);
NumberInput.displayName = "NumberInput";

/** Telephone input with phone icon. */
export const TelephoneInput = forwardRef<HTMLInputElement, InputProps>(
  ({ iconMode = "default", size = "md", onIconClick, ...props }, ref) => {
    const icon = <FiPhone size={iconSizeMap[size]} className={iconColor} aria-hidden />;
    return (
      <InputBaseWithRef
        ref={ref}
        type="tel"
        rightSlot={wrapIcon(icon, iconMode, iconMode === "button", onIconClick, "Phone")}
        showRightSlot={iconMode !== "none"}
        {...props}
      />
    );
  }
);
TelephoneInput.displayName = "TelephoneInput";

export interface NumberRangeInputProps extends Omit<InputProps, "type"> {
  min: number;
  max: number;
}

/** Number input with min and max constraints. Hashtag icon and custom stepper. */
export const NumberRangeInput = forwardRef<HTMLInputElement, NumberRangeInputProps>(
  ({ min, max, iconMode = "default", size = "md", onIconClick, ...props }, ref) => {
    const icon = <FaHashtag size={iconSizeMap[size]} className={iconColor} aria-hidden />;
    return (
      <InputBaseWithRef
        ref={ref}
        type="number"
        min={min}
        max={max}
        rightSlot={wrapIcon(icon, iconMode, iconMode === "button", onIconClick, "Number")}
        showRightSlot={iconMode !== "none"}
        rightSlotOffsetForSpinners
        showNumberStepper
        {...props}
      />
    );
  }
);
NumberRangeInput.displayName = "NumberRangeInput";
