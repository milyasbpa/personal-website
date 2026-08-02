import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ReadingProgress } from './ReadingProgress';

const meta: Meta<typeof ReadingProgress> = {
  title: 'Features/Blog/Components/ReadingProgress',
  component: ReadingProgress,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ReadingProgress>;

export const Default: Story = {};
