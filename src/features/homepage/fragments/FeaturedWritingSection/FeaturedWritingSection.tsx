'use client';

import React from 'react';
import Link from 'next/link';
import { POSTS, HOMEPAGE_DICTIONARY } from '../../data/homeData';
import { FeaturedPostCard } from '../../components/FeaturedPostCard/FeaturedPostCard';
import { cn } from '@/core/lib/cn';

export interface FeaturedWritingSectionProps {
  className?: string;
}

export function FeaturedWritingSection({ className }: FeaturedWritingSectionProps) {
  const writingDict = HOMEPAGE_DICTIONARY.sections.writing;

  return (
    <section id="writing" aria-labelledby="writing-title" className={cn('', className)}>
      <h2
        id="writing-title"
        className="text-xs uppercase tracking-widest mb-6 font-mono text-[var(--fg-muted)]"
      >
        {writingDict.title}
      </h2>
      <div className="flex flex-col gap-4">
        {POSTS.map((post) => (
          <FeaturedPostCard key={post.slug} post={post} />
        ))}
      </div>
      <Link
        href="/blog"
        className={cn(
          'inline-flex items-center gap-1.5 text-sm font-medium mt-5 text-[var(--accent)]',
          'hover:gap-2.5 transition-all duration-200'
        )}
      >
        {writingDict.viewAll}
        <svg
          width="13"
          height="13"
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
      </Link>
    </section>
  );
}
