'use client';

import React, { useState } from 'react';
import { Button } from '@/core/components/ui/Button/Button';
import { HOMEPAGE_DICTIONARY } from '../../data/homeData';
import { cn } from '@/core/lib/cn';

export interface ContactFormProps {
  onSubmitSuccess?: () => void;
  className?: string;
}

export function ContactForm({ onSubmitSuccess, className }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formDict = HOMEPAGE_DICTIONARY.sections.contact.form;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(false);
    setSubmitted(true);
    onSubmitSuccess?.();
  };

  if (submitted) {
    return (
      <div
        className={cn(
          'p-8 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-light)] text-center',
          className
        )}
        data-testid="contact-submitted"
      >
        <span className="text-3xl mb-3 block text-[var(--accent)]" aria-hidden="true">
          ✓
        </span>
        <h3 className="font-semibold text-lg mb-1 text-[var(--accent)]">{formDict.successTitle}</h3>
        <p className="text-sm text-[var(--fg-body)]">
          {formDict.successMessage}
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', email: '', message: '' });
          }}
        >
          {formDict.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('p-6 rounded-xl border border-border bg-bg-card space-y-4', className)}
      data-testid="contact-form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="text-xs font-medium mb-1.5 block capitalize font-mono text-[var(--fg-body)]"
          >
            {formDict.nameLabel}
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder={formDict.namePlaceholder}
            className={cn(
              'w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]',
              'outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)]'
            )}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="text-xs font-medium mb-1.5 block capitalize font-mono text-[var(--fg-body)]"
          >
            {formDict.emailLabel}
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder={formDict.emailPlaceholder}
            className={cn(
              'w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]',
              'outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)]'
            )}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="text-xs font-medium mb-1.5 block font-mono text-[var(--fg-body)]"
        >
          {formDict.messageLabel}
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={formDict.messagePlaceholder}
          className={cn(
            'w-full px-3 py-2.5 text-sm rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]',
            'outline-none resize-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)]'
          )}
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        disabled={loading}
      >
        {loading ? formDict.sendingButton : formDict.sendButton}
      </Button>
    </form>
  );
}
