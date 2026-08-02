import React from 'react';
import { cn } from '@core/lib/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'glass';
  children: React.ReactNode;
}

export function Card({
  variant = 'default',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        variant === 'default' &&
          'bg-white dark:bg-zinc-900/60 border-zinc-200/80 dark:border-zinc-800/80 shadow-sm',
        variant === 'interactive' &&
          'bg-white dark:bg-zinc-900/60 border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:border-[#00AB6B]/50 dark:hover:border-[#00BF71]/50 hover:shadow-md hover:-translate-y-0.5 cursor-pointer',
        variant === 'glass' &&
          'bg-white/70 dark:bg-zinc-900/70 border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur-md shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
