import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlogListSection } from './BlogListSection';

const mockPosts = [
  {
    slug: 'intentional-animation-product-ui',
    title: 'The Case for Intentional Animation in Product UI',
    description: 'Animation description',
    date: '2026-07-12',
    tags: ['Design Engineering', 'frontend'],
    published: true,
    readingTime: '5 min read',
    content: '',
  },
  {
    slug: 'five-years-typescript-type-safety',
    title: 'What Five Years of TypeScript Taught Me About Type Safety',
    description: 'TypeScript description',
    date: '2026-06-24',
    tags: ['frontend', 'TypeScript'],
    published: true,
    readingTime: '4 min read',
    content: '',
  },
];

describe('BlogListSection', () => {
  it('renders heading and all posts by default', () => {
    render(<BlogListSection posts={mockPosts} tags={['frontend', 'Design Engineering', 'TypeScript']} />);
    expect(screen.getByRole('heading', { name: 'Writing' })).toBeInTheDocument();
    expect(screen.getByText(/showing 2 posts/i)).toBeInTheDocument();
    expect(screen.getByText(/intentional animation/i)).toBeInTheDocument();
    expect(screen.getByText(/five years of typescript/i)).toBeInTheDocument();
  });

  it('filters posts when selecting a tag', () => {
    render(<BlogListSection posts={mockPosts} tags={['frontend', 'Design Engineering', 'TypeScript']} />);
    const designButton = screen.getByRole('button', { name: 'Design Engineering' });
    fireEvent.click(designButton);

    expect(screen.getByText(/showing 1 post/i)).toBeInTheDocument();
    expect(screen.getByText(/intentional animation/i)).toBeInTheDocument();
    expect(screen.queryByText(/five years of typescript/i)).not.toBeInTheDocument();
  });
});
