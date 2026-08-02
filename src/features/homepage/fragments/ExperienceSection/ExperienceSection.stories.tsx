import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ExperienceSection } from './ExperienceSection';

const meta: Meta<typeof ExperienceSection> = {
  title: 'Features/Homepage/Fragments/ExperienceSection',
  component: ExperienceSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExperienceSection>;

export const Default: Story = {
  args: {},
};
