import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FeaturedPostCard } from './FeaturedPostCard';
import { POSTS } from '../../data/homeData';

describe('FeaturedPostCard', () => {
  const samplePost = POSTS[0];

  it('renders post title, date, reading time, and tag', () => {
    render(<FeaturedPostCard post={samplePost} />);
    expect(screen.getByText(samplePost.title)).toBeInTheDocument();
    expect(screen.getByText(samplePost.date)).toBeInTheDocument();
    expect(screen.getByText(samplePost.read)).toBeInTheDocument();
    expect(screen.getByText(samplePost.tag)).toBeInTheDocument();
  });

  it('links to the correct slug URL', () => {
    render(<FeaturedPostCard post={samplePost} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/writing/${samplePost.slug}`);
  });
});
