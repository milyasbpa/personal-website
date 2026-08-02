import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge component', () => {
  it('renders badge text correctly', () => {
    render(<Badge>5+ Years Experience</Badge>);
    expect(screen.getByText('5+ Years Experience')).toBeInTheDocument();
  });

  it('renders status variant with dot indicator', () => {
    render(<Badge variant="status">Available for work</Badge>);
    const badge = screen.getByText('Available for work');
    expect(badge).toBeInTheDocument();
  });
});
