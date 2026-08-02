import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeaturedPostCard } from './FeaturedPostCard';
import { POSTS } from '../../data/homeData';

const meta: Meta<typeof FeaturedPostCard> = {
  title: 'Features/Homepage/Components/FeaturedPostCard',
  component: FeaturedPostCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeaturedPostCard>;

export const Default: Story = {
  args: {
    post: POSTS[0],
  },
};

export const TypeScriptPost: Story = {
  args: {
    post: POSTS[1],
  },
};
