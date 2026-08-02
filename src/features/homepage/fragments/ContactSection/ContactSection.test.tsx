import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactSection } from './ContactSection';

describe('ContactSection', () => {
  it('renders contact header and contact form', () => {
    render(<ContactSection />);
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });
});
