'use client';

import React, { useState } from 'react';
import { cn } from '@/core/lib/cn';

export interface CodeBlockProps {
  language?: string;
  filename?: string;
  code?: string;
  children?: React.ReactNode;
  className?: string;
}

export function CodeBlock({
  language = 'text',
  filename,
  code,
  children,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // If code is not explicitly passed, try to extract string from children
  const childProps =
    React.isValidElement(children) && children.props
      ? (children.props as { children?: unknown })
      : undefined;

  const codeString =
    code ||
    (typeof children === 'string'
      ? children
      : childProps && typeof childProps.children === 'string'
      ? childProps.children
      : '');

  const handleCopy = async () => {
    if (!codeString) return;
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  return (
    <div
      className={cn(
        'my-6 rounded-xl border border-[var(--border)] overflow-hidden bg-[var(--bg-card)] shadow-sm',
        className
      )}
    >
      {/* Code header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)] bg-[var(--bg-card)] text-xs font-mono text-[var(--fg-muted)]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
          {filename && <span className="ml-2 font-medium text-[var(--fg)]">{filename}</span>}
          {!filename && language && (
            <span className="ml-2 uppercase tracking-wider text-[10px]">{language}</span>
          )}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] text-[var(--fg-subtle)] transition-colors text-xs font-mono"
          aria-label={copied ? 'Copied code to clipboard' : 'Copy code to clipboard'}
        >
          {copied ? (
            <>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="p-4 overflow-x-auto text-sm font-mono leading-relaxed bg-[var(--bg-card)] text-[var(--fg-body)]">
        <pre className="m-0 bg-transparent p-0">
          <code>{codeString || children}</code>
        </pre>
      </div>
    </div>
  );
}
