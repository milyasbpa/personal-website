import React from 'react';
import { cn } from '@/core/lib/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, type = 'text', ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium mb-1.5 block capitalize font-mono text-[var(--fg-body)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            'w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]',
            'outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)]',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-100',
            className
          )}
          {...props}
        />
        {error ? (
          <p className="text-xs text-red-500 mt-1 font-mono">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-[var(--fg-subtle)] mt-1 font-mono">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
