import React from 'react';
import Link from 'next/link';
import { Pill } from '@/core/components/ui/Pill/Pill';
import type { BlogPost } from '@/core/lib/mdx';

export interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="mb-10 pb-8 border-b border-[var(--border)]">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--fg-subtle)] hover:text-[var(--accent)] transition-colors mb-6"
      >
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>All writing</span>
      </Link>

      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-2.5 mb-4">
        {post.tags.map((tag) => (
          <Pill key={tag} variant="accent" className="text-xs px-2.5 py-0.5">
            {tag}
          </Pill>
        ))}
        <span className="text-xs font-mono text-[var(--fg-subtle)]">{post.date}</span>
        <span className="text-xs text-[var(--fg-subtle)]">·</span>
        <span className="text-xs font-mono text-[var(--fg-subtle)]">{post.readingTime}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-[var(--fg)]">
        {post.title}
      </h1>

      {/* Description / Excerpt */}
      {post.description && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--fg-muted)]">
          {post.description}
        </p>
      )}
    </header>
  );
}
