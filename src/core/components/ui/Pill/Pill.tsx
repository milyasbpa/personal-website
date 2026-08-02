import React from 'react';
import { cn } from '@core/lib/cn';

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'muted' | 'outline';
  children: React.ReactNode;
}

export function Pill({
  variant = 'accent',
  className,
  children,
  ...props
}: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border font-mono transition-all duration-200',
        variant === 'accent' &&
          'bg-[#00AB6B]/10 text-[#00AB6B] border-[#00AB6B]/30 hover:border-[#00AB6B]/60 dark:bg-[#00BF71]/10 dark:text-[#00BF71] dark:border-[#00BF71]/30 dark:hover:border-[#00BF71]/60',
        variant === 'muted' &&
          'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500',
        variant === 'outline' &&
          'bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
