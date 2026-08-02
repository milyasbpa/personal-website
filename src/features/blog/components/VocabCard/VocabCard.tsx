import React from 'react';
import { cn } from '@/core/lib/cn';

export interface VocabCardProps {
  kanji: string;
  reading: string;
  meaning: string;
  className?: string;
}

export function VocabCard({ kanji, reading, meaning, className }: VocabCardProps) {
  return (
    <div
      className={cn(
        'my-5 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:border-[var(--accent-border)] transition-all duration-200',
        className
      )}
      role="group"
      aria-label={`Japanese Vocabulary Card: ${kanji} (${reading}) meaning ${meaning}`}
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl md:text-3xl font-bold font-mono text-[var(--fg)] px-3 py-1.5 rounded-lg bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent-border)] select-all">
          {kanji}
        </span>
        <div>
          <div className="text-xs font-mono text-[var(--fg-subtle)] mb-0.5">Reading</div>
          <div className="text-sm font-medium text-[var(--fg)] font-mono">{reading}</div>
        </div>
      </div>
      <div className="sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-[var(--border)]">
        <div className="text-xs font-mono text-[var(--fg-subtle)] mb-0.5">Meaning</div>
        <div className="text-sm font-semibold text-[var(--fg-body)]">{meaning}</div>
      </div>
    </div>
  );
}
