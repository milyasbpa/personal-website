import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FeaturedWritingSection } from './FeaturedWritingSection';
import { POSTS } from '../../data/homeData';

describe('FeaturedWritingSection', () => {
  it('renders writing section title and all post titles', () => {
    render(<FeaturedWritingSection />);
    expect(screen.getByRole('heading', { name: /writing/i })).toBeInTheDocument();
    POSTS.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  it('renders view all writing link', () => {
    render(<FeaturedWritingSection />);
    const link = screen.getByRole('link', { name: /view all writing/i });
    expect(link).toHaveAttribute('href', '/blog');
  });
});
