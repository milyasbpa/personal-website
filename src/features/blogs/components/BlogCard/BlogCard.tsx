import React from 'react';
import Link from 'next/link';
import { Pill } from '@/core/components/ui/Pill/Pill';
import type { BlogPost } from '../../types';

export interface BlogCardProps {
  post: BlogPost;
  isLast?: boolean;
}

export function BlogCard({ post, isLast = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block"
      style={{
        borderBottom: isLast ? 'none' : '1px solid var(--border)',
      }}
    >
      <article className="py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6 transition-all duration-200">
        <div className="flex-1 min-w-0">
          {/* Tag & Metadata row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            {post.tags.map((tag) => (
              <Pill key={tag} variant="accent" className="text-[11px] px-2.5 py-0.5">
                {tag}
              </Pill>
            ))}
            <span className="text-xs font-mono text-[var(--fg-subtle)]">{post.date}</span>
            <span className="text-xs text-[var(--fg-subtle)]">·</span>
            <span className="text-xs font-mono text-[var(--fg-subtle)]">{post.readingTime}</span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold leading-snug mb-2 text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors duration-200">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm leading-relaxed line-clamp-2 text-[var(--fg-muted)]">
            {post.description}
          </p>
        </div>

        {/* Arrow indicator on hover */}
        <div className="hidden sm:flex items-center self-center text-[var(--fg-subtle)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200">
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}
