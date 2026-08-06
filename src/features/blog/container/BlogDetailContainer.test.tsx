import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlogDetailContainer, extractHeadings } from './BlogDetailContainer';

const mockPost = {
  slug: 'intentional-animation-product-ui',
  title: 'The Case for Intentional Animation in Product UI',
  description: 'Desc',
  date: '2026-07-12',
  tags: ['Design Engineering'],
  published: true,
  readingTime: '5 min read',
  content: '## Section One\n\n### Sub Section\n\nParagraph text.',
};

describe('BlogDetailContainer', () => {
  it('extractHeadings parses ## and ### markdown headings correctly', () => {
    const headings = extractHeadings(mockPost.content);
    expect(headings).toHaveLength(2);
    expect(headings[0]).toEqual({
      id: 'section-one',
      text: 'Section One',
      level: 2,
    });
    expect(headings[1]).toEqual({
      id: 'sub-section',
      text: 'Sub Section',
      level: 3,
    });
  });

  it('renders progress bar, header, MDX content, and TOC', () => {
    render(<BlogDetailContainer post={mockPost} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /intentional animation/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /section one/i })).toBeInTheDocument();
  }, 15000);
});
