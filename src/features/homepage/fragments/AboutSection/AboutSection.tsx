'use client';

import React from 'react';
import { TECH_PILLS } from '../../data/homeData';
import { Pill } from '@/core/components/ui/Pill/Pill';
import { cn } from '@/core/lib/cn';

export interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section id="about" aria-labelledby="about-title" className={cn('', className)}>
      <h2
        id="about-title"
        className="text-xs uppercase tracking-widest mb-6 font-mono text-[var(--fg-muted)]"
      >
        About
      </h2>
      <div className="text-[15px] leading-relaxed space-y-4 mb-8 text-[var(--fg-body)] max-w-3xl">
        <p>
          I&apos;m a frontend engineer with 5+ years building production interfaces for developer
          tools, design systems, and SaaS products. I care deeply about the intersection of{' '}
          <span className="font-medium text-[var(--accent)]">design and engineering</span> — where a
          well-typed component system meets a thoughtful interaction model.
        </p>
        <p>
          My work spans <span className="font-medium text-[var(--accent)]">React</span>,{' '}
          <span className="font-medium text-[var(--accent)]">TypeScript</span>, and{' '}
          <span className="font-medium text-[var(--accent)]">Next.js</span> at scale — with a
          focus on accessibility, performance, and composability. I also study{' '}
          <span className="font-medium text-[var(--accent)]">日本語 (Japanese)</span> — working
          toward JLPT N5.
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
