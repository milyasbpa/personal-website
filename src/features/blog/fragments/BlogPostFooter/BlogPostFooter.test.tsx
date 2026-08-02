import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlogPostFooter } from './BlogPostFooter';

const prevPost = {
  slug: 'prev-post',
  title: 'Previous Post Title',
  description: 'Prev desc',
  date: '2026-06-01',
  tags: ['frontend'],
  published: true,
  readingTime: '3 min read',
  content: '',
};

const nextPost = {
  slug: 'next-post',
  title: 'Next Post Title',
  description: 'Next desc',
  date: '2026-07-01',
  tags: ['frontend'],
  published: true,
  readingTime: '4 min read',
  content: '',
};

describe('BlogPostFooter', () => {
  it('renders previous and next post links', () => {
    render(<BlogPostFooter prevPost={prevPost} nextPost={nextPost} />);
    expect(screen.getByText('← Previous Article')).toBeInTheDocument();
    expect(screen.getByText('Previous Post Title')).toBeInTheDocument();
    expect(screen.getByText('Next Article →')).toBeInTheDocument();
    expect(screen.getByText('Next Post Title')).toBeInTheDocument();
  });

  it('renders nothing when neither prev nor next post is provided', () => {
    const { container } = render(<BlogPostFooter />);
    expect(container).toBeEmptyDOMElement();
  });
});
