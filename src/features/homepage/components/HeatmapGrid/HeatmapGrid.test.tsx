import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeatmapGrid } from './HeatmapGrid';

describe('HeatmapGrid', () => {
  it('renders the GitHub Activity header and description', () => {
    render(<HeatmapGrid />);
    expect(screen.getByText('GitHub Activity')).toBeInTheDocument();
    expect(
      screen.getByText(/contribution graph across personal & open-source projects/i)
    ).toBeInTheDocument();
  });

  it('renders 52 columns of heatmap cells', () => {
    render(<HeatmapGrid />);
    const columns = screen.getAllByTestId('heatmap-column');
    expect(columns).toHaveLength(52);
  });
});
