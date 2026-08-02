import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ExperienceCard } from './ExperienceCard';
import { EXPERIENCE } from '../../data/homeData';

describe('ExperienceCard', () => {
  const sampleJob = EXPERIENCE[0];

  it('renders company name, role, dates, and description', () => {
    render(<ExperienceCard job={sampleJob} />);
    expect(screen.getByText(sampleJob.company)).toBeInTheDocument();
    expect(screen.getByText(sampleJob.role)).toBeInTheDocument();
    expect(screen.getByText(sampleJob.dates)).toBeInTheDocument();
    expect(screen.getByText(sampleJob.desc)).toBeInTheDocument();
  });

  it('renders tech pills for the job', () => {
    render(<ExperienceCard job={sampleJob} />);
    sampleJob.tech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('calls onSelect when clicked', () => {
    const handleSelect = vi.fn();
    render(<ExperienceCard job={sampleJob} onSelect={handleSelect} />);
    const cardButton = screen.getByRole('button', { name: /view full details/i });
    fireEvent.click(cardButton);
    expect(handleSelect).toHaveBeenCalledWith(sampleJob);
  });
});
