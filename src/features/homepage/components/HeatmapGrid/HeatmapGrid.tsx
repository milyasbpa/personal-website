'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/core/lib/cn';

export interface HeatmapGridProps {
  title?: string;
  subtitle?: string;
  ariaLabel?: string;
  lessLabel?: string;
  moreLabel?: string;
  data?: number[][];
  levelsLight?: string[];
  levelsDark?: string[];
  className?: string;
}

const DEFAULT_LEVELS_LIGHT = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
const DEFAULT_LEVELS_DARK = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

// Generate sample 52-week activity grid as fallback
const DEFAULT_DATA: number[][] = Array.from({ length: 52 }, (_, weekIndex) =>
  Array.from({ length: 7 }, (_, dayIndex) => {
    const seed = (weekIndex * 7 + dayIndex * 13) % 100;
    if (seed < 40) return 0;
    if (seed < 65) return 1;
    if (seed < 85) return 2;
    if (seed < 95) return 3;
    return 4;
  })
);

export function HeatmapGrid({
  title = 'GitHub Activity',
  subtitle = 'Contribution graph across personal & open-source projects',
  ariaLabel = 'GitHub annual contribution activity heatmap grid',
  lessLabel = 'Less',
  moreLabel = 'More',
  data = DEFAULT_DATA,
  levelsLight = DEFAULT_LEVELS_LIGHT,
  levelsDark = DEFAULT_LEVELS_DARK,
  className,
}: HeatmapGridProps) {
  const { resolvedTheme, theme } = useTheme();
  const isDark = resolvedTheme === 'dark' || theme === 'dark';
  const levels = isDark ? levelsDark : levelsLight;

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
          <h3 className="text-sm font-semibold text-[var(--fg)]">{title}</h3>
          <p className="text-xs mt-0.5 text-[var(--fg-subtle)]">
            {subtitle}
          </p>
        </div>
      </div>
      <div
        className="overflow-x-auto bg-transparent pb-2"
        role="img"
        aria-label={ariaLabel}
      >
        <div className="flex gap-[3px] min-w-max">
          {data.map((week, wi) => (
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
        <span className="text-[10px] font-mono text-[var(--fg-subtle)]">{lessLabel}</span>
        {levels.map((c, i) => (
          <div key={i} className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: c }} />
        ))}
        <span className="text-[10px] font-mono text-[var(--fg-subtle)]">{moreLabel}</span>
      </div>
    </div>
  );
}
