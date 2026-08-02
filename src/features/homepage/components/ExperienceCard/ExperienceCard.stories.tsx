import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ExperienceCard } from './ExperienceCard';
import { EXPERIENCE } from '../../data/homeData';

const meta: Meta<typeof ExperienceCard> = {
  title: 'Features/Homepage/Components/ExperienceCard',
  component: ExperienceCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExperienceCard>;

export const Default: Story = {
  args: {
    job: EXPERIENCE[0],
  },
};

export const Linear: Story = {
  args: {
    job: EXPERIENCE[1],
  },
};
