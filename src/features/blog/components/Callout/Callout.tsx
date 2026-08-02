import React from 'react';
import { cn } from '@/core/lib/cn';

export interface CalloutProps {
  type?: 'note' | 'tip' | 'warning';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Callout({
  type = 'note',
  title,
  children,
  className,
}: CalloutProps) {
  const styles = {
    note: {
      border: 'border-blue-500/30 dark:border-blue-400/30',
      bg: 'bg-blue-500/5 dark:bg-blue-400/5',
      text: 'text-blue-900 dark:text-blue-200',
      icon: 'ℹ️',
    },
    tip: {
      border: 'border-emerald-500/30 dark:border-emerald-400/30',
      bg: 'bg-emerald-500/5 dark:bg-emerald-400/5',
      text: 'text-emerald-900 dark:text-emerald-200',
      icon: '💡',
    },
    warning: {
      border: 'border-amber-500/30 dark:border-amber-400/30',
      bg: 'bg-amber-500/5 dark:bg-amber-400/5',
      text: 'text-amber-900 dark:text-amber-200',
      icon: '⚠️',
    },
  };

  const current = styles[type];

  return (
    <div
      className={cn(
        'my-6 p-4 rounded-xl border flex gap-3.5 leading-relaxed text-sm',
        current.border,
        current.bg,
        current.text,
        className
      )}
      role="region"
      aria-label={title || `Callout ${type}`}
    >
      <span className="text-base select-none flex-shrink-0" aria-hidden="true">
        {current.icon}
      </span>
      <div className="flex-1">
        {title && <div className="font-semibold mb-1 font-mono text-xs uppercase tracking-wider">{title}</div>}
        <div className="text-[var(--fg-body)]">{children}</div>
      </div>
    </div>
  );
}
