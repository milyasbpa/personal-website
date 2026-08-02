import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { GlassNavbar } from './GlassNavbar';

const meta: Meta<typeof GlassNavbar> = {
  title: 'Core/Layout/GlassNavbar',
  component: GlassNavbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof GlassNavbar>;

export const Default: Story = {};
