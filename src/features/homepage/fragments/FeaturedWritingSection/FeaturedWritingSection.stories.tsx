import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeaturedWritingSection } from './FeaturedWritingSection';

const meta: Meta<typeof FeaturedWritingSection> = {
  title: 'Features/Homepage/Fragments/FeaturedWritingSection',
  component: FeaturedWritingSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeaturedWritingSection>;

export const Default: Story = {
  args: {},
};
