import React from 'react';
import { cn } from '@core/lib/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'status';
  size?: 'sm' | 'md';
  showDot?: boolean;
  dotColor?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = 'default',
  size = 'md',
  showDot = false,
  dotColor = 'bg-[#00AB6B]',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-mono font-medium rounded-full transition-colors',
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs',
        variant === 'default' &&
          'bg-[#00AB6B]/10 text-[#00AB6B] border border-[#00AB6B]/20 dark:bg-[#00BF71]/10 dark:text-[#00BF71] dark:border-[#00BF71]/20',
        variant === 'outline' &&
          'border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-zinc-900/50',
        variant === 'status' &&
          'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80',
        className
      )}
      {...props}
    >
      {(showDot || variant === 'status') && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotColor
            )}
          />
          <span
            className={cn('relative inline-flex rounded-full h-2 w-2', dotColor)}
          />
        </span>
      )}
      {children}
    </span>
  );
}
