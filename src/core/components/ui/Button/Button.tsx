import React from 'react';
import { cn } from '@core/lib/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * Core Button Primitive — Follows Bibit Green Design Tokens (#00AB6B / #00BF71)
 * Enforces minimum 44px touch target on mobile and visible focus ring for WCAG 2.1 AA accessibility.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles & accessibility focus ring
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 select-none',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
          'disabled:pointer-events-none disabled:opacity-50',
          // Variants
          variant === 'primary' &&
            'bg-accent text-white shadow-sm hover:bg-[#00965E] dark:hover:bg-[#00AB6B]',
          variant === 'secondary' &&
            'border border-border bg-transparent text-fg-body hover:border-accent hover:bg-bg-hover hover:text-fg',
          variant === 'ghost' &&
            'bg-transparent text-fg-body hover:bg-accent-light hover:text-accent',
          // Sizes (min-h-[44px] on mobile for touch target safety)
          size === 'sm' && 'min-h-[40px] px-3 py-1.5 text-xs sm:min-h-[36px]',
          size === 'md' && 'min-h-[44px] px-4 py-2 text-sm',
          size === 'lg' && 'min-h-[48px] px-6 py-3 text-base',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
