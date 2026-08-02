import homepageContent from '../locales/en.json';
import { ExperienceItem, PostItem, LanguageItem } from '../types';

export const HOMEPAGE_DICTIONARY = homepageContent;

export type HomepageDictionary = typeof homepageContent;

export const PROFILE_INFO = homepageContent.profile;

export const NAV_LINKS = homepageContent.nav;

export const SOCIAL_LINKS = homepageContent.social;

export const TECH_PILLS: string[] = homepageContent.sections.about.techPills;

export const EXPERIENCE: ExperienceItem[] = homepageContent.sections.experience.items;

export const POSTS: PostItem[] = homepageContent.sections.writing.posts;

export const NOW_ITEMS: string[] = homepageContent.sections.now.items;

export const LANGUAGE_ITEMS: LanguageItem[] = homepageContent.sections.now.language.items;

export const HEATMAP_LEVELS_LIGHT: string[] = [
  '#F3F4F6',
  '#ECFDF5',
  '#A7F3D0',
  '#10B981',
  '#059669',
];

export const HEATMAP_LEVELS_DARK: string[] = [
  '#1F2937',
  '#064E3B',
  '#065F46',
  '#059669',
  '#34D399',
];

// Deterministic 52x7 heatmap grid to avoid SSR hydration mismatch
export const HEATMAP_DATA: number[][] = Array.from({ length: 52 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => ((w * 7 + d * 3 + 5) % 11 === 0 ? 4 : ((w * 3 + d) % 5)))
);
