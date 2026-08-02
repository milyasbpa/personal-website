'use client';

import React from 'react';
import { ExperienceItem } from '../../types';
import { Pill } from '@/core/components/ui/Pill/Pill';
import { cn } from '@/core/lib/cn';

export interface ExperienceCardProps {
  job: ExperienceItem;
  onSelect?: (job: ExperienceItem) => void;
  className?: string;
}

export function ExperienceCard({ job, onSelect, className }: ExperienceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(job)}
      className={cn(
        'group w-full text-left p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]',
        'hover:border-[var(--accent-border)] hover:bg-[var(--bg-hover)]',
        'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer',
        className
      )}
      aria-label={`View full details for ${job.role} at ${job.company}`}
    >
      <div className="flex items-start justify-between mb-1 gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1 bg-[var(--accent)]" />
          <span className="font-semibold text-base text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
            {job.company}
          </span>
        </div>
        <span className="text-xs whitespace-nowrap font-mono text-[var(--fg-subtle)]">
          {job.dates}
        </span>
      </div>
      <p className="text-sm font-medium ml-4 mb-3 text-[var(--fg-body)]">{job.role}</p>
      <p className="text-sm leading-relaxed ml-4 mb-4 text-[var(--fg-muted)]">{job.desc}</p>
      <div className="flex items-center justify-between ml-4 gap-4 flex-wrap">
        <div className="flex flex-wrap gap-1.5">
          {job.tech.map((t) => (
            <Pill key={t} variant="accent">
              {t}
            </Pill>
          ))}
        </div>
        <span className="flex items-center gap-1.5 text-xs font-mono font-medium underline underline-offset-2 flex-shrink-0 text-[var(--fg-muted)] group-hover:gap-2 group-hover:text-[var(--accent)] transition-all duration-200">
          Full story
          <svg
            width="11"
            height="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </div>
    </button>
  );
}
