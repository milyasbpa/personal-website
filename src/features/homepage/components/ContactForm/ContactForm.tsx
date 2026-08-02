'use client';

import React, { useState } from 'react';
import { Button } from '@/core/components/ui/Button/Button';
import { Input } from '@/core/components/ui/Input/Input';
import { Textarea } from '@/core/components/ui/Textarea/Textarea';
import { cn } from '@/core/lib/cn';

export interface ContactFormLabels {
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  sendButton?: string;
  sendingButton?: string;
  successTitle?: string;
  successMessage?: string;
  sendAnother?: string;
}

export interface ContactFormProps {
  labels?: ContactFormLabels;
  onSubmitSuccess?: () => void;
  className?: string;
}

const DEFAULT_LABELS: ContactFormLabels = {
  nameLabel: 'Name',
  namePlaceholder: 'Your name',
  emailLabel: 'Email',
  emailPlaceholder: 'you@example.com',
  messageLabel: 'Message',
  messagePlaceholder: "What's on your mind?",
  sendButton: 'Send Message',
  sendingButton: 'Sending...',
  successTitle: 'Message sent!',
  successMessage: "Thanks for reaching out. I'll reply within a day or two.",
  sendAnother: 'Send another message',
};

export function ContactForm({ labels, onSubmitSuccess, className }: ContactFormProps) {
  const formLabels = { ...DEFAULT_LABELS, ...labels };
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
        <h3 className="font-semibold text-lg mb-1 text-[var(--accent)]">{formLabels.successTitle}</h3>
        <p className="text-sm text-[var(--fg-body)]">
          {formLabels.successMessage}
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
          {formLabels.sendAnother}
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
        <Input
          id="contact-name"
          label={formLabels.nameLabel}
          placeholder={formLabels.namePlaceholder}
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          id="contact-email"
          type="email"
          label={formLabels.emailLabel}
          placeholder={formLabels.emailPlaceholder}
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <Textarea
        id="contact-message"
        label={formLabels.messageLabel}
        placeholder={formLabels.messagePlaceholder}
        rows={5}
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full"
        disabled={loading}
      >
        {loading ? formLabels.sendingButton : formLabels.sendButton}
      </Button>
    </form>
  );
}
