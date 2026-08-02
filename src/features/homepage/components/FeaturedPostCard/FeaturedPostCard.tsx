'use client';

import React from 'react';
import Link from 'next/link';
import { PostItem } from '../../types';
import { Pill } from '@/core/components/ui/Pill/Pill';
import { cn } from '@/core/lib/cn';

export interface FeaturedPostCardProps {
  post: PostItem;
  className?: string;
}

export function FeaturedPostCard({ post, className }: FeaturedPostCardProps) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className={cn(
        'group p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]',
        'hover:border-[var(--accent-border)] hover:bg-[var(--bg-hover)]',
        'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm flex items-start justify-between gap-4',
        className
      )}
    >
      <div className="flex-1">
        <h3 className="font-semibold text-base mb-2 text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors leading-snug">
          {post.title}
        </h3>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-mono text-[var(--fg-subtle)]">{post.date}</span>
          <span className="text-xs text-[var(--fg-subtle)]">·</span>
          <span className="text-xs text-[var(--fg-subtle)]">{post.read}</span>
          <Pill variant="accent">
            {post.tag}
          </Pill>
        </div>
      </div>
      <span className="mt-1 text-[var(--fg-subtle)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all flex-shrink-0">
        <svg
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
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
    </Link>
  );
}
