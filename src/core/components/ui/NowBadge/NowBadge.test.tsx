import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NowBadge } from './NowBadge';

describe('NowBadge component', () => {
  it('renders default status text and link correctly', () => {
    render(<NowBadge />);
    const link = screen.getByRole('link', { name: /available for consulting/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/now');
  });

  it('renders custom status text and href', () => {
    render(<NowBadge href="#contact" statusText="Open to advisory roles" />);
    expect(screen.getByText('Open to advisory roles')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '#contact');
  });
});
