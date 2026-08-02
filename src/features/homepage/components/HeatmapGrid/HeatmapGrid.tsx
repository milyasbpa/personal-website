'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import {
  HEATMAP_DATA,
  HEATMAP_LEVELS_LIGHT,
  HEATMAP_LEVELS_DARK,
  HOMEPAGE_DICTIONARY,
} from '../../data/homeData';
import { cn } from '@/core/lib/cn';

export interface HeatmapGridProps {
  className?: string;
}

export function HeatmapGrid({ className }: HeatmapGridProps) {
  const { resolvedTheme, theme } = useTheme();
  const isDark = resolvedTheme === 'dark' || theme === 'dark';
  const levels = isDark ? HEATMAP_LEVELS_DARK : HEATMAP_LEVELS_LIGHT;
  const heatmapDict = HOMEPAGE_DICTIONARY.sections.now.heatmap;

  return (
    <div
      className={cn(
        'p-6 rounded-xl border border-border bg-bg-card',
        className
      )}
      data-testid="heatmap-grid"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-[var(--fg)]">{heatmapDict.title}</h3>
          <p className="text-xs mt-0.5 text-[var(--fg-subtle)]">
            {heatmapDict.subtitle}
          </p>
        </div>
      </div>
      <div
        className="overflow-x-auto bg-transparent pb-2"
        role="img"
        aria-label={heatmapDict.ariaLabel}
      >
        <div className="flex gap-[3px] min-w-max">
          {HEATMAP_DATA.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]" data-testid="heatmap-column">
              {week.map((level, di) => (
                <div
                  key={di}
                  className="w-[10px] h-[10px] rounded-[2px] hover:opacity-70 transition-opacity"
                  style={{ backgroundColor: levels[level] }}
                  data-level={level}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-1.5 mt-3">
        <span className="text-[10px] font-mono text-[var(--fg-subtle)]">{heatmapDict.less}</span>
        {levels.map((c, i) => (
          <div key={i} className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: c }} />
        ))}
        <span className="text-[10px] font-mono text-[var(--fg-subtle)]">{heatmapDict.more}</span>
      </div>
    </div>
  );
}
