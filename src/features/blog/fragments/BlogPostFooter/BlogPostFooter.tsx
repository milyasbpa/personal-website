import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/core/lib/mdx';

export interface BlogPostFooterProps {
  prevPost?: BlogPost;
  nextPost?: BlogPost;
}

export function BlogPostFooter({ prevPost, nextPost }: BlogPostFooterProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <footer className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-stretch justify-between gap-4">
      {/* Previous Post */}
      <div className="flex-1">
        {prevPost && (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group block p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent-border)] transition-all h-full"
          >
            <div className="text-xs font-mono text-[var(--fg-subtle)] mb-1 group-hover:text-[var(--accent)]">
              ← Previous Article
            </div>
            <div className="text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] line-clamp-1">
              {prevPost.title}
            </div>
          </Link>
        )}
      </div>

      {/* Next Post */}
      <div className="flex-1 sm:text-right">
        {nextPost && (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group block p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent-border)] transition-all h-full"
          >
            <div className="text-xs font-mono text-[var(--fg-subtle)] mb-1 group-hover:text-[var(--accent)]">
              Next Article →
            </div>
            <div className="text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] line-clamp-1">
              {nextPost.title}
            </div>
          </Link>
        )}
      </div>
    </footer>
  );
}
