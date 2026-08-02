import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlogPostContent } from './BlogPostContent';

describe('BlogPostContent', () => {
  it('renders MDX headings and content synchronously', () => {
    render(<BlogPostContent source="## Hello MDX" />);
    const heading = screen.getByRole('heading', { name: /hello mdx/i });
    expect(heading).toBeInTheDocument();
  });
});
