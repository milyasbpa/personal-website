'use client';

import React, { useEffect, useState } from 'react';
import { BLOG_DICTIONARY } from '../../data/blogData';
import { cn } from '@/core/lib/cn';

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export interface TableOfContentsProps {
  headings: HeadingItem[];
  className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      className={cn('p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]', className)}
      aria-label={BLOG_DICTIONARY.toc.ariaLabel}
    >
      <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--fg-muted)] mb-3">
        {BLOG_DICTIONARY.toc.title}
      </h3>
      <ul className="space-y-2 text-xs font-mono">
        {headings.map((heading) => {
          const isActive = heading.id === activeId;
          return (
            <li
              key={heading.id}
              style={{
                paddingLeft: heading.level === 3 ? '12px' : '0px',
              }}
            >
              <a
                href={`#${heading.id}`}
                className={cn(
                  'block py-0.5 transition-colors duration-200 line-clamp-1',
                  isActive
                    ? 'text-[var(--accent)] font-semibold'
                    : 'text-[var(--fg-subtle)] hover:text-[var(--fg)]'
                )}
                aria-current={isActive ? 'location' : undefined}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
