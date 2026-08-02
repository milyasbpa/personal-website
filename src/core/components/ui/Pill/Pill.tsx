import React from 'react';
import { cn } from '@core/lib/cn';

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'muted' | 'outline';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export function Pill({
  variant = 'accent',
  size = 'sm',
  className,
  children,
  ...props
}: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border font-mono transition-all duration-200',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs',
        variant === 'accent' &&
          'bg-[var(--accent-light)] text-[var(--accent)] border-[var(--accent-border)]',
        variant === 'muted' &&
          'bg-[var(--bg-hover)] text-[var(--fg-muted)] border-[var(--border)]',
        variant === 'outline' &&
          'bg-transparent text-[var(--fg-subtle)] border-[var(--border)]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
