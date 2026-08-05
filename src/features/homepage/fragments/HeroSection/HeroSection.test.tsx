import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  it('renders name, call me bas, and tagline', () => {
    render(<HeroSection />);
    expect(screen.getByRole('heading', { name: /ilyas bashirah/i })).toBeInTheDocument();
    expect(screen.getByText(/call me bas\./i)).toBeInTheDocument();
    expect(
      screen.getByText(/architecting resilient web applications with intention/i)
    ).toBeInTheDocument();
  });

  it('renders social link icons', () => {
    render(<HeroSection />);
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
});
