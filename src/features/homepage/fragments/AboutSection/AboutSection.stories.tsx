import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AboutSection } from './AboutSection';

const meta: Meta<typeof AboutSection> = {
  title: 'Features/Homepage/Fragments/AboutSection',
  component: AboutSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {
  args: {},
};
