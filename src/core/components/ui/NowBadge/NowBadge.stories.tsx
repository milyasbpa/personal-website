import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NowBadge } from './NowBadge';

const meta: Meta<typeof NowBadge> = {
  title: 'Core/UI/NowBadge',
  component: NowBadge,
  tags: ['autodocs'],
  argTypes: {
    statusText: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NowBadge>;

export const Default: Story = {
  args: {
    statusText: 'Available for consulting & advisory',
    href: '/#now',
  },
};

export const CustomStatus: Story = {
  args: {
    statusText: 'Focusing on Next.js 16 DX @ Vercel',
    href: '/#now',
  },
};
