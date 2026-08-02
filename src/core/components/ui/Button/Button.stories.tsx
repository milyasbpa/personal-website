import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Core/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Explore Writing',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'View on GitHub',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Read more →',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Submitted',
    disabled: true,
  },
};
