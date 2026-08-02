import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TableOfContents } from './TableOfContents';

const mockHeadings = [
  { id: 'why-most-animations-feel-wrong', text: 'Why most animations feel wrong', level: 2 },
  { id: 'the-three-questions-motion-can-answer', text: 'The three questions motion can answer', level: 2 },
  { id: 'duration-and-easing', text: 'Duration and easing are the hard part', level: 3 },
];

describe('TableOfContents', () => {
  it('renders Table of Contents heading and all items', () => {
    render(<TableOfContents headings={mockHeadings} />);
    expect(screen.getByRole('heading', { name: /table of contents/i })).toBeInTheDocument();
    expect(screen.getByText('Why most animations feel wrong')).toBeInTheDocument();
    expect(screen.getByText('The three questions motion can answer')).toBeInTheDocument();
    expect(screen.getByText('Duration and easing are the hard part')).toBeInTheDocument();
  });

  it('renders nothing when headings array is empty', () => {
    const { container } = render(<TableOfContents headings={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
