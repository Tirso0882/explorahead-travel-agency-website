"use client";

import { forwardRef, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, rightIcon, className = "", id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-ocean mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray pointer-events-none z-10">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`
              w-full py-3 rounded-lg
              bg-white border border-gray-lighter
              text-charcoal placeholder:text-gray
              transition-all duration-200
              focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20
              disabled:bg-sand-light disabled:cursor-not-allowed
              ${leftIcon ? "!pl-[3.25rem]" : "pl-4"}
              ${rightIcon ? "!pr-[3.25rem]" : "pr-4"}
              ${error ? "border-terracotta focus:border-terracotta focus:ring-terracotta/20" : ""}
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-terracotta">{error}</p>}
        {hint && !error && <p className="mt-1 text-sm text-gray">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = "", id, ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-ocean mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full px-4 py-3 rounded-lg
            bg-white border border-gray-lighter
            text-charcoal placeholder:text-gray
            transition-all duration-200
            focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20
            disabled:bg-sand-light disabled:cursor-not-allowed
            resize-y min-h-[120px]
            ${error ? "border-terracotta focus:border-terracotta focus:ring-terracotta/20" : ""}
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-terracotta">{error}</p>}
        {hint && !error && <p className="mt-1 text-sm text-gray">{hint}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, className = "", id, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-ocean mb-2"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={`
            w-full px-4 py-3 rounded-lg
            bg-white border border-gray-lighter
            text-charcoal
            transition-all duration-200
            focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20
            disabled:bg-sand-light disabled:cursor-not-allowed
            appearance-none cursor-pointer
            bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231A365D%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')]
            bg-[length:0.7em] bg-[right_1rem_center] bg-no-repeat
            ${error ? "border-terracotta focus:border-terracotta focus:ring-terracotta/20" : ""}
            ${className}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-terracotta">{error}</p>}
        {hint && !error && <p className="mt-1 text-sm text-gray">{hint}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Input;

