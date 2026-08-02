'use client';

import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { HOMEPAGE_DICTIONARY } from '../../data/homeData';
import { cn } from '@/core/lib/cn';

export interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  const contactDict = HOMEPAGE_DICTIONARY.sections.contact;

  return (
    <section id="contact" aria-labelledby="contact-title" className={cn('', className)}>
      <h2
        id="contact-title"
        className="text-xs uppercase tracking-widest mb-1 font-mono text-[var(--fg-muted)]"
      >
        {contactDict.title}
      </h2>
      <p className="text-xs mb-6 text-[var(--fg-subtle)]">
        {contactDict.subtitle}
      </p>
      <ContactForm labels={contactDict.form} />
    </section>
  );
}
