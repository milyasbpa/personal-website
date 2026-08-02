import React from 'react';
import Link from 'next/link';
import { cn } from '@core/lib/cn';

export interface NowBadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  statusText?: string;
}

export function NowBadge({
  href = '/now',
  statusText = 'Available for consulting & advisory',
  className,
  ...props
}: NowBadgeProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200/80 dark:border-emerald-800/60 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-700/80 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AB6B] dark:focus-visible:ring-[#00BF71]',
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AB6B] dark:bg-[#00BF71] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AB6B] dark:bg-[#00BF71]" />
      </span>
      <span className="text-xs font-mono font-medium text-emerald-800 dark:text-emerald-300 group-hover:text-emerald-950 dark:group-hover:text-emerald-100 transition-colors">
        {statusText}
      </span>
      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono group-hover:translate-x-0.5 transition-transform">
        →
      </span>
    </Link>
  );
}
