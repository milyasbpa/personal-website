'use client';

import React, { useEffect, useState } from 'react';
import { BLOG_DICTIONARY } from '../../data/blogData';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal <= 0) {
        setProgress(0);
        return;
      }
      const current = window.scrollY;
      const pct = Math.min(100, Math.max(0, (current / scrollTotal) * 100));
      setProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-transparent"
      role="progressbar"
      aria-label={BLOG_DICTIONARY.readingProgress.ariaLabel}
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-[var(--accent)] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
        data-testid="reading-progress-bar"
      />
    </div>
  );
}
