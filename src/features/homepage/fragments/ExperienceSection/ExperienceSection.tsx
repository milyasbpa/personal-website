'use client';

import React, { useState, useEffect } from 'react';
import { EXPERIENCE, HOMEPAGE_DICTIONARY } from '../../data/homeData';
import { ExperienceItem } from '../../types';
import { ExperienceCard } from '../../components/ExperienceCard/ExperienceCard';
import { Pill } from '@/core/components/ui/Pill/Pill';
import { cn } from '@/core/lib/cn';

export interface ExperienceSectionProps {
  className?: string;
}

export function ExperienceSection({ className }: ExperienceSectionProps) {
  const [selectedJob, setSelectedJob] = useState<ExperienceItem | null>(null);
  const expDict = HOMEPAGE_DICTIONARY.sections.experience;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedJob(null);
      }
    };
    if (selectedJob) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedJob]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className={cn('', className)}
    >
      <h2
        id="experience-title"
        className="text-xs uppercase tracking-widest mb-6 font-mono text-[var(--fg-muted)]"
      >
        {expDict.title}
      </h2>
      <div className="flex flex-col gap-4">
        {EXPERIENCE.map((job) => (
          <ExperienceCard
            key={job.company}
            job={job}
            ariaLabelPrefix={expDict.card.ariaLabelPrefix}
            atLabel={expDict.card.at}
            fullStoryLabel={expDict.card.fullStory}
            onSelect={(j) => setSelectedJob(j)}
          />
        ))}
      </div>

      <a
        href={expDict.resumeButton.url}
        download="CV_Ilyas_Bashirah_ATS.pdf"
        className={cn(
          'mt-6 w-full flex items-center justify-between px-5 py-4 rounded-xl border border-[var(--border)]',
          'bg-[var(--bg-card)] text-[var(--fg-muted)] hover:border-[var(--accent-border)] hover:text-[var(--fg)]',
          'transition-all duration-200 group'
        )}
      >
        <div className="flex items-center gap-3">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="text-[var(--accent)]"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <div>
            <p className="text-sm font-medium leading-none text-[var(--fg)]">
              {expDict.resumeButton.title}
            </p>
            <p className="text-xs font-mono mt-1 text-[var(--fg-subtle)]">
              {expDict.resumeButton.meta}
            </p>
          </div>
        </div>
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="text-[var(--fg-subtle)] group-hover:text-[var(--accent)] group-hover:translate-y-0.5 transition-all"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </a>

      {/* Experience Drawer Modal */}
      {selectedJob && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
            onClick={() => setSelectedJob(null)}
            data-testid="experience-drawer-backdrop"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-company"
            className={cn(
              'fixed top-0 right-0 h-full z-50 flex flex-col overflow-hidden',
              'w-full max-w-lg bg-[var(--bg)] border-l border-[var(--border)] shadow-2xl',
              'animate-in slide-in-from-right duration-300'
            )}
            data-testid="experience-drawer"
          >
            <div className="flex items-start justify-between p-6 pb-5 border-b border-[var(--border)]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  <h3 id="drawer-company" className="text-lg font-bold text-[var(--fg)]">
                    {selectedJob.company}
                  </h3>
                </div>
                <p className="text-sm font-medium text-[var(--fg-body)]">{selectedJob.role}</p>
                <p className="text-xs font-mono mt-1 text-[var(--fg-subtle)]">
                  {selectedJob.dates} · {selectedJob.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                aria-label={expDict.modal.closeLabel}
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono mb-2 text-[var(--fg-muted)]">
                  {expDict.modal.overview}
                </h4>
                <p className="text-sm leading-relaxed text-[var(--fg-body)]">
                  {selectedJob.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono mb-3 text-[var(--fg-muted)]">
                  {expDict.modal.contributions}
                </h4>
                <ul className="space-y-3">
                  {selectedJob.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[var(--fg-body)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[var(--accent)]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono mb-3 text-[var(--fg-muted)]">
                  {expDict.modal.technologies}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedJob.tech.map((t) => (
                    <Pill
                      key={t}
                      variant="accent"
                    >
                      {t}
                    </Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
