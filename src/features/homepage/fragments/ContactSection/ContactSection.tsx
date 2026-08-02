'use client';

import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { cn } from '@/core/lib/cn';

export interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-title" className={cn('py-12 md:py-16', className)}>
      <h2
        id="contact-title"
        className="text-xs uppercase tracking-widest mb-1 font-mono text-[var(--fg-muted)]"
      >
        Contact
      </h2>
      <p className="text-xs mb-6 text-[var(--fg-subtle)]">
        Get in touch — I&apos;d love to hear from you
      </p>
      <ContactForm />
    </section>
  );
}
