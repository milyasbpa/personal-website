import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HeroSection } from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Features/Homepage/Fragments/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {},
};
