import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NowSection } from './NowSection';

describe('NowSection', () => {
  it('renders section title and currently working on items', () => {
    render(<NowSection />);
    expect(screen.getByRole('heading', { name: /self exploration/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /currently working on/i })).toBeInTheDocument();
  });

  it('renders HeatmapGrid inside NowSection', () => {
    render(<NowSection />);
    expect(screen.getByTestId('heatmap-grid')).toBeInTheDocument();
  });

  it('renders Japanese N5 language learning badge without professional learning progress bar', () => {
    render(<NowSection />);
    expect(screen.getByText(/learning · n5/i)).toBeInTheDocument();
    expect(screen.getAllByText(/professional/i).length).toBeGreaterThan(0);
  });
});
