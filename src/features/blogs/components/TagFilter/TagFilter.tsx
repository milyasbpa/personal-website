'use client';

import React from 'react';
import { BLOGS_DICTIONARY } from '../../data/blogsData';
import { cn } from '@/core/lib/cn';

export interface TagFilterProps {
  tags: string[];
  activeTag: string;
  onSelectTag: (tag: string) => void;
  className?: string;
}

export function TagFilter({ tags, activeTag, onSelectTag, className }: TagFilterProps) {
  const allTagLabel = BLOGS_DICTIONARY.filtering.allTag;
  const allTags = [allTagLabel, ...tags.filter((t) => t !== allTagLabel)];

  return (
    <div
      className={cn('flex flex-wrap items-center gap-2 pb-2', className)}
      role="group"
      aria-label={BLOGS_DICTIONARY.filtering.ariaFilterLabel}
    >
      {allTags.map((tag) => {
        const isActive = tag === activeTag;
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onSelectTag(tag)}
            className={cn(
              'px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
              isActive
                ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-sm'
                : 'bg-[var(--bg-card)] text-[var(--fg-muted)] border-[var(--border)] hover:border-[var(--accent-border)] hover:text-[var(--accent)]'
            )}
            aria-pressed={isActive}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
