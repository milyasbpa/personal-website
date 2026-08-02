import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders textarea with label and placeholder', () => {
    render(<Textarea label="Message" placeholder="What's on your mind?" />);
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("What's on your mind?")).toBeInTheDocument();
  });
});
