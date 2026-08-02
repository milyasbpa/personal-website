import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MDXComponents } from './MDXComponents';

describe('MDXComponents', () => {
  it('renders custom h2 component correctly', () => {
    const H2 = MDXComponents.h2;
    render(<H2>Section Heading</H2>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Section Heading');
    expect(heading).toHaveClass('text-xl');
  });

  it('renders custom blockquote correctly', () => {
    const Blockquote = MDXComponents.blockquote;
    render(<Blockquote>Quote message</Blockquote>);
    expect(screen.getByText('Quote message')).toBeInTheDocument();
  });
});
