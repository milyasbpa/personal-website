import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Core/UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'status'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    showDot: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'React & TypeScript',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Architecture',
    variant: 'outline',
  },
};

export const Status: Story = {
  args: {
    children: 'Available for consulting',
    variant: 'status',
  },
};
