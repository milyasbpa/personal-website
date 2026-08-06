import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  it('renders copyright and author name correctly', () => {
    render(<Footer />);
    expect(screen.getByText(/Ilyas Bashirah/i)).toBeInTheDocument();
  });

  it('renders social navigation links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/milyasbpa');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/ilyas-arya-181a7a184/');
  });
});
