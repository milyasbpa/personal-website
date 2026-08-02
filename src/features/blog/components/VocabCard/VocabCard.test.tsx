import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VocabCard } from './VocabCard';

describe('VocabCard', () => {
  it('renders kanji, reading, and meaning correctly', () => {
    render(
      <VocabCard
        kanji="開発"
        reading="かいはつ (kaihatsu)"
        meaning="Development / Software Engineering"
      />
    );
    expect(screen.getByText('開発')).toBeInTheDocument();
    expect(screen.getByText('かいはつ (kaihatsu)')).toBeInTheDocument();
    expect(
      screen.getByText('Development / Software Engineering')
    ).toBeInTheDocument();
  });
});
