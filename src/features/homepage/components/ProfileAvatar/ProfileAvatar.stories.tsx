import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProfileAvatar } from './ProfileAvatar';

const meta: Meta<typeof ProfileAvatar> = {
  title: 'Features/Homepage/Components/ProfileAvatar',
  component: ProfileAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileAvatar>;

export const Default: Story = {
  args: {
    size: 'md',
    showStatusBadge: true,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    showStatusBadge: true,
  },
};

export const SmallNoBadge: Story = {
  args: {
    size: 'sm',
    showStatusBadge: false,
  },
};
