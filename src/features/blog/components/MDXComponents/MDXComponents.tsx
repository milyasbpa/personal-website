import React from 'react';
import Image from 'next/image';
import { Callout } from '../Callout/Callout';
import { VocabCard } from '../VocabCard/VocabCard';
import { CodeBlock } from '../CodeBlock/CodeBlock';

export const MDXComponents = {
  Callout,
  Vocab: VocabCard,
  CodeBlock,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-2xl md:text-3xl font-bold tracking-tight mt-10 mb-4 text-[var(--fg)]" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight mt-10 mb-3 text-[var(--fg)]" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg md:text-xl font-semibold mt-8 mb-2 text-[var(--fg)]" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base leading-relaxed my-4 text-[var(--fg-body)]" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside pl-6 my-4 space-y-2 text-[var(--fg-body)]" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside pl-6 my-4 space-y-2 text-[var(--fg-body)]" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-[var(--accent)] pl-4 my-6 italic text-[var(--fg-muted)]" {...props} />
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    // Check if child is code tag
    if (React.isValidElement(children) && children.type === 'code') {
      const childProps = children.props as { className?: string; children?: React.ReactNode };
      const language = childProps.className ? childProps.className.replace(/language-/, '') : 'text';
      return <CodeBlock language={language}>{childProps.children}</CodeBlock>;
    }
    return (
      <pre className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] overflow-x-auto my-6 text-sm font-mono" {...props}>
        {children}
      </pre>
    );
  },
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="px-1.5 py-0.5 rounded-md bg-[var(--bg-card)] border border-[var(--border)] text-xs font-mono text-[var(--accent)]" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt } = props;
    if (!src || typeof src !== 'string') return null;
    return (
      <span className="block my-6 rounded-xl overflow-hidden border border-[var(--border)]">
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={450}
          className="w-full h-auto object-cover"
        />
      </span>
    );
  },
};
