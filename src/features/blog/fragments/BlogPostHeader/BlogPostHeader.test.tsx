import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlogPostHeader } from './BlogPostHeader';

const mockPost = {
  slug: 'test-post',
  title: 'Test Post Title',
  description: 'Header test description',
  date: '2026-07-12',
  tags: ['Frontend', 'TypeScript'],
  published: true,
  readingTime: '5 min read',
  content: '',
};

describe('BlogPostHeader', () => {
  it('renders title, description, date, reading time, and tags', () => {
    render(<BlogPostHeader post={mockPost} />);
    expect(screen.getByRole('heading', { name: 'Test Post Title' })).toBeInTheDocument();
    expect(screen.getByText('Header test description')).toBeInTheDocument();
    expect(screen.getByText('2026-07-12')).toBeInTheDocument();
    expect(screen.getByText('5 min read')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('renders back link to /blog', () => {
    render(<BlogPostHeader post={mockPost} />);
    expect(screen.getByRole('link', { name: /all writing/i })).toHaveAttribute('href', '/blog');
  });
});
