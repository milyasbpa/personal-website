import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HomepageContainer } from './HomepageContainer';

const meta: Meta<typeof HomepageContainer> = {
  title: 'Features/Homepage/Container/HomepageContainer',
  component: HomepageContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HomepageContainer>;

export const Default: Story = {
  args: {},
};
