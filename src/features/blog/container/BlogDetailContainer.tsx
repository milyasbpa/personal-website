import React from 'react';
import { ReadingProgress } from '../components/ReadingProgress/ReadingProgress';
import { TableOfContents } from '../components/TableOfContents/TableOfContents';
import { BlogPostHeader } from '../fragments/BlogPostHeader/BlogPostHeader';
import { BlogPostContent } from '../fragments/BlogPostContent/BlogPostContent';
import { BlogPostFooter } from '../fragments/BlogPostFooter/BlogPostFooter';
import type { BlogPost } from '@/core/lib/mdx';

export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const lines = content.split('\n');
  const headings: { id: string; text: string; level: number }[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
      const text = trimmed.replace(/^##\s+/, '');
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      headings.push({ id, text, level: 2 });
    } else if (trimmed.startsWith('### ')) {
      const text = trimmed.replace(/^###\s+/, '');
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      headings.push({ id, text, level: 3 });
    }
  }

  return headings;
}

export interface BlogDetailContainerProps {
  post: BlogPost;
  prevPost?: BlogPost;
  nextPost?: BlogPost;
}

export function BlogDetailContainer({ post, prevPost, nextPost }: BlogDetailContainerProps) {
  const headings = extractHeadings(post.content || '');

  return (
    <>
      <ReadingProgress />
      <div className="max-w-5xl mx-auto px-6 py-8 md:py-16">
        <BlogPostHeader post={post} />

        <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-12 items-start">
          <main className="min-w-0">
            <BlogPostContent source={post.content} />
          </main>

          <aside className="hidden lg:block sticky top-24">
            <TableOfContents headings={headings} />
          </aside>
        </div>

        <BlogPostFooter prevPost={prevPost} nextPost={nextPost} />
      </div>
    </>
  );
}
