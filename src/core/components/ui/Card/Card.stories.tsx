import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Core/UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'interactive', 'glass'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <div className="p-6">
        <h3 className="text-lg font-bold">Vercel</h3>
        <p className="text-sm text-zinc-500 mt-1">Senior Frontend Engineer · Jan 2023 — Present</p>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    variant: 'interactive',
    children: (
      <div className="p-6">
        <h3 className="text-lg font-bold">The Case for Intentional Animation</h3>
        <p className="text-sm text-zinc-500 mt-1">Jul 12, 2026 · 5 min read</p>
      </div>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: (
      <div className="p-6">
        <h3 className="text-lg font-bold">Glassmorphism Card</h3>
        <p className="text-sm text-zinc-500 mt-1">Subtle border and background blur</p>
      </div>
    ),
  },
};
