'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { AboutSection } from '../fragments/AboutSection/AboutSection';
import { ExperienceSection } from '../fragments/ExperienceSection/ExperienceSection';
import { FeaturedWritingSection } from '../fragments/FeaturedWritingSection/FeaturedWritingSection';
import { NowSection } from '../fragments/NowSection/NowSection';
import { ContactSection } from '../fragments/ContactSection/ContactSection';
import { ProfileAvatar } from '../components/ProfileAvatar/ProfileAvatar';
import { NowBadge } from '@/core/components/ui/NowBadge/NowBadge';
import { cn } from '@/core/lib/cn';
import {
  HOMEPAGE_DICTIONARY,
  PROFILE_INFO,
  NAV_LINKS,
  SOCIAL_LINKS,
} from '../data/homeData';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  LinkedIn: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Email: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  ),
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function HomepageContainer() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-5xl mx-auto lg:flex">
      {/* ── LEFT SIDEBAR (STICKY ON DESKTOP, MATCHING PROTOTYPE) ── */}
      <aside
        aria-label={HOMEPAGE_DICTIONARY.aria.profileAndNav}
        className="hidden lg:flex lg:flex-col lg:sticky lg:top-14 lg:h-[calc(100vh-56px)] lg:w-[46%] lg:py-12 lg:pl-8 lg:pr-12"
      >
        <div className="flex items-center gap-4 mb-5">
          <ProfileAvatar
            size="md"
            showStatusBadge={true}
            alt={PROFILE_INFO.avatarAlt}
            statusBadgeLabel={PROFILE_INFO.statusBadge}
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--fg)] leading-tight">
              {PROFILE_INFO.name}
            </h1>
            <p className="text-xs mt-0.5 text-[var(--fg-subtle)]">
              {PROFILE_INFO.nicknamePrefix}
              <span className="font-mono font-semibold text-[var(--accent)]">
                {PROFILE_INFO.nickname}
              </span>
            </p>
          </div>
        </div>

        <p className="text-[15px] leading-relaxed mb-1 text-[var(--fg-body)]">
          {PROFILE_INFO.tagline}
        </p>
        <p className="text-xs leading-relaxed max-w-xs text-[var(--fg-muted)]">
          {PROFILE_INFO.bioShort}
        </p>

        {/* MIDDLE — interactive scrollspy navigation */}
        <nav aria-label={HOMEPAGE_DICTIONARY.aria.sectionsNav} className="flex-1 flex flex-col justify-center py-4">
          {NAV_LINKS.map(({ id, label, sub, meta }) => {
            const active = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="group relative flex items-center justify-between py-2 px-0 text-left w-full transition-all duration-200 border-b border-[var(--border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {/* left accent indicator line */}
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full transition-all duration-300 bg-[var(--accent)]"
                  style={{
                    height: active ? '18px' : '0px',
                  }}
                />

                {/* left — label + sub */}
                <div className="pl-4">
                  <span
                    className={cn(
                      'block text-sm transition-all duration-200 leading-tight',
                      active
                        ? 'text-[var(--fg)] font-semibold translate-x-0.5'
                        : 'text-[var(--fg-muted)] font-normal group-hover:text-[var(--fg)] group-hover:translate-x-0.5'
                    )}
                  >
                    {label}
                  </span>
                  <span
                    className={cn(
                      'block text-[11px] font-mono mt-0.5 transition-colors duration-200',
                      active
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--fg-subtle)] group-hover:text-[var(--accent)]'
                    )}
                  >
                    {sub}
                  </span>
                </div>

                {/* right — meta tag pill */}
                <span
                  className={cn(
                    'text-[10px] font-mono px-2 py-0.5 rounded-full transition-all duration-300 border',
                    active
                      ? 'text-[var(--accent)] bg-[var(--accent-light)] border-[var(--accent-border)]'
                      : 'text-[var(--fg-subtle)] bg-transparent border-transparent group-hover:text-[var(--accent)] group-hover:bg-[var(--accent-light)] group-hover:border-[var(--accent-border)]'
                  )}
                >
                  {meta}
                </span>
              </button>
            );
          })}
        </nav>

        {/* BOTTOM — footer & social links */}
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] font-mono leading-tight text-[var(--fg-subtle)]">
            {HOMEPAGE_DICTIONARY.footer.copyright}
            <br />
            {HOMEPAGE_DICTIONARY.footer.builtWith}
          </p>
          <div className="flex items-center gap-1.5">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  'w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--border)]',
                  'text-[var(--fg-muted)] hover:text-[var(--accent)] hover:border-[var(--accent-border)]',
                  'hover:bg-[var(--accent-light)] transition-all duration-200'
                )}
              >
                {SOCIAL_ICONS[label]}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* ── RIGHT MAIN CONTENT AREA ── */}
      <main className="lg:w-[54%] px-6 lg:pl-8 lg:pr-8 py-10 lg:py-12 flex flex-col gap-14">
        {/* Mobile Hero (only visible on small screens < lg) */}
        <div className="lg:hidden">
          <div className="flex items-center gap-3 mb-5">
            <NowBadge href="#now" statusText={PROFILE_INFO.statusBadge} />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <ProfileAvatar
              size="md"
              showStatusBadge={true}
              alt={PROFILE_INFO.avatarAlt}
              statusBadgeLabel={PROFILE_INFO.statusBadge}
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[var(--fg)]">{PROFILE_INFO.name}</h1>
              <span className="font-mono font-bold text-sm text-[var(--accent)]">{PROFILE_INFO.nickname}</span>
            </div>
          </div>
          <p className="text-base leading-relaxed mb-5 text-[var(--fg-body)]">
            {PROFILE_INFO.mobileBio}
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  'w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--accent-border)]',
                  'bg-[var(--accent-light)] text-[var(--accent)] hover:scale-105 transition-transform'
                )}
              >
                {SOCIAL_ICONS[label]}
              </a>
            ))}
          </div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <AboutSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionVariants}
        >
          <ExperienceSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionVariants}
        >
          <FeaturedWritingSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionVariants}
        >
          <NowSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionVariants}
        >
          <ContactSection />
        </motion.div>
      </main>
    </div>
  );
}
