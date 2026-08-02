'use client';

import React from 'react';
import { NOW_ITEMS, LANGUAGE_ITEMS, HOMEPAGE_DICTIONARY } from '../../data/homeData';
import { HeatmapGrid } from '../../components/HeatmapGrid/HeatmapGrid';
import { cn } from '@/core/lib/cn';

export interface NowSectionProps {
  className?: string;
}

export function NowSection({ className }: NowSectionProps) {
  const nowDict = HOMEPAGE_DICTIONARY.sections.now;

  return (
    <section id="now" aria-labelledby="now-title" className={cn('', className)}>
      <h2
        id="now-title"
        className="text-xs uppercase tracking-widest mb-1 font-mono text-[var(--fg-muted)]"
      >
        {nowDict.title}
      </h2>
      <p className="text-xs mb-6 text-[var(--fg-subtle)]">{nowDict.subtitle}</p>

      {/* Currently Working On */}
      <div className="p-6 rounded-xl border border-border bg-bg-card mb-4">
        <h3 className="text-sm font-semibold mb-4 text-[var(--fg)]">{nowDict.workingOnHeading}</h3>
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
        <HeatmapGrid
          title={nowDict.heatmap.title}
          subtitle={nowDict.heatmap.subtitle}
          ariaLabel={nowDict.heatmap.ariaLabel}
          lessLabel={nowDict.heatmap.less}
          moreLabel={nowDict.heatmap.more}
        />
      </div>

      {/* Language */}
      <div className="p-6 rounded-xl border border-border bg-bg-card">
        <h3 className="text-sm font-semibold mb-4 text-[var(--fg)]">{nowDict.language.heading}</h3>
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
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-[var(--accent-border)] bg-[var(--accent-light)] text-[var(--accent)] flex-shrink-0">
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
