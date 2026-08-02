import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExperienceSection } from './ExperienceSection';

describe('ExperienceSection', () => {
  it('renders section heading and job cards', () => {
    render(<ExperienceSection />);
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByText('Vercel')).toBeInTheDocument();
    expect(screen.getByText('Linear')).toBeInTheDocument();
    expect(screen.getByText('Shopify')).toBeInTheDocument();
  });

  it('renders resume download link', () => {
    render(<ExperienceSection />);
    expect(screen.getByText(/get my full resume/i)).toBeInTheDocument();
  });

  it('opens experience drawer modal when a job is clicked and closes when backdrop or X is clicked', () => {
    render(<ExperienceSection />);
    const buttons = screen.getAllByRole('button', { name: /view full details/i });
    fireEvent.click(buttons[0]); // Click Vercel

    expect(screen.getByTestId('experience-drawer')).toBeInTheDocument();
    expect(screen.getByText(/key impact & contributions/i)).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: /close details/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByTestId('experience-drawer')).not.toBeInTheDocument();
  });
});
