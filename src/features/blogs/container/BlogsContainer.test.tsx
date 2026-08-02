import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlogsContainer } from './BlogsContainer';

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
];

describe('BlogsContainer', () => {
  it('renders writing page header and blog list section', () => {
    render(<BlogsContainer posts={mockPosts} tags={['Design Engineering', 'frontend']} />);
    expect(screen.getByRole('heading', { name: 'Writing' })).toBeInTheDocument();
    expect(screen.getByText(/intentional animation/i)).toBeInTheDocument();
  });
});
