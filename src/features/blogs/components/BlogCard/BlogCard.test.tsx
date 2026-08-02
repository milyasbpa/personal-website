import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlogCard } from './BlogCard';

const mockPost = {
  slug: 'test-post',
  title: 'Test Post Title',
  description: 'This is a test description for the blog card.',
  date: '2026-07-01',
  tags: ['Frontend', 'TypeScript'],
  published: true,
  readingTime: '3 min read',
  content: 'Full content here',
};

describe('BlogCard', () => {
  it('renders title, description, date, reading time, and tags', () => {
    render(<BlogCard post={mockPost} />);
    expect(screen.getByRole('heading', { name: /test post title/i })).toBeInTheDocument();
    expect(screen.getByText(/this is a test description/i)).toBeInTheDocument();
    expect(screen.getByText('2026-07-01')).toBeInTheDocument();
    expect(screen.getByText('3 min read')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('links to correct /blog/[slug] URL', () => {
    render(<BlogCard post={mockPost} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog/test-post');
  });
});
