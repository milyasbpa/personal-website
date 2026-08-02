'use client';

import React from 'react';
import { HOMEPAGE_DICTIONARY, TECH_PILLS } from '../../data/homeData';
import { Pill } from '@/core/components/ui/Pill/Pill';
import { cn } from '@/core/lib/cn';

export interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
  const content = HOMEPAGE_DICTIONARY.sections.about;

  return (
    <section id="about" aria-labelledby="about-title" className={cn('', className)}>
      <h2
        id="about-title"
        className="text-xs uppercase tracking-widest mb-6 font-mono text-[var(--fg-muted)]"
      >
        {content.title}
      </h2>
      <div className="text-[15px] leading-relaxed space-y-4 mb-8 text-[var(--fg-body)] max-w-3xl">
        <p>
          {content.bioPart1}
          <span className="font-medium text-[var(--accent)]">{content.bioHighlight1}</span>
          {content.bioPart2}
        </p>
        <p>
          {content.bioPart3}
          <span className="font-medium text-[var(--accent)]">{content.bioTech1}</span>
          {content.bioPart4}
          <span className="font-medium text-[var(--accent)]">{content.bioTech2}</span>
          {content.bioPart5}
          <span className="font-medium text-[var(--accent)]">{content.bioTech3}</span>
          {content.bioPart6}
          <span className="font-medium text-[var(--accent)]">{content.bioHighlight2}</span>
          {content.bioPart7}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {TECH_PILLS.map((tech) => (
          <Pill
            key={tech}
            variant="accent"
            size="md"
            className="cursor-default"
          >
            {tech}
          </Pill>
        ))}
      </div>
    </section>
  );
}
