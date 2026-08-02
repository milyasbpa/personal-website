'use client';

import React from 'react';
import { NOW_ITEMS, LANGUAGE_ITEMS } from '../../data/homeData';
import { HeatmapGrid } from '../../components/HeatmapGrid/HeatmapGrid';
import { Pill } from '@/core/components/ui/Pill/Pill';
import { cn } from '@/core/lib/cn';

export interface NowSectionProps {
  className?: string;
}

export function NowSection({ className }: NowSectionProps) {
  return (
    <section id="now" aria-labelledby="now-title" className={cn('py-12 md:py-16', className)}>
      <h2
        id="now-title"
        className="text-xs uppercase tracking-widest mb-1 font-mono text-[var(--fg-muted)]"
      >
        Self Exploration
      </h2>
      <p className="text-xs mb-6 text-[var(--fg-subtle)]">What I&apos;m currently working on</p>

      {/* Currently Working On */}
      <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] mb-4">
        <h3 className="text-sm font-semibold mb-4 text-[var(--fg)]">Currently Working On</h3>
        <ul className="space-y-3">
          {NOW_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-[var(--fg-body)]"
            >
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[var(--accent)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* GitHub Activity Heatmap Grid */}
      <div className="mb-4">
        <HeatmapGrid />
      </div>

      {/* Language */}
      <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
        <h3 className="text-sm font-semibold mb-4 text-[var(--fg)]">Language</h3>
        <div className="flex flex-col gap-3">
          {LANGUAGE_ITEMS.map(({ flag, lang, native, level, levelDesc }) => (
            <div key={lang} className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-2.5">
                <span className="text-base leading-none mt-0.5" aria-hidden="true">
                  {flag}
                </span>
                <div>
                  <p className="text-sm font-medium leading-none text-[var(--fg)]">
                    {lang}{' '}
                    {native !== lang ? (
                      <span className="font-mono text-xs ml-1 text-[var(--fg-subtle)]">
                        {native}
                      </span>
                    ) : null}
                  </p>
                  <p className="text-xs mt-1 text-[var(--fg-subtle)]">{levelDesc}</p>
                </div>
              </div>
              <Pill
                variant="accent"
                className="flex-shrink-0"
              >
                {level}
              </Pill>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
