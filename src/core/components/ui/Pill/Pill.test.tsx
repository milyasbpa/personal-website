import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pill } from './Pill';

describe('Pill component', () => {
  it('renders pill content correctly', () => {
    render(<Pill>Next.js 16</Pill>);
    expect(screen.getByText('Next.js 16')).toBeInTheDocument();
  });

  it('renders muted variant correctly', () => {
    render(<Pill variant="muted">TypeScript</Pill>);
    const pill = screen.getByText('TypeScript');
    expect(pill).toBeInTheDocument();
    expect(pill).toHaveClass('font-mono');
  });
});
