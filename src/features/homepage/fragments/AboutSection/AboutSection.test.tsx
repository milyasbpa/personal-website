import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AboutSection } from './AboutSection';
import { TECH_PILLS } from '../../data/homeData';

describe('AboutSection', () => {
  it('renders about section title and bio text', () => {
    render(<AboutSection />);
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByText(/frontend engineer with 5\+ years/i)).toBeInTheDocument();
    expect(screen.getByText(/jlpt n5/i)).toBeInTheDocument();
  });

  it('renders all tech pills', () => {
    render(<AboutSection />);
    TECH_PILLS.forEach((tech) => {
      expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
    });
  });
});
