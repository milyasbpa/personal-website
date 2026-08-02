import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NowSection } from './NowSection';

const meta: Meta<typeof NowSection> = {
  title: 'Features/Homepage/Fragments/NowSection',
  component: NowSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NowSection>;

export const Default: Story = {
  args: {},
};
