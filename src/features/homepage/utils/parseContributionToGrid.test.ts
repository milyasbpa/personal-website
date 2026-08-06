import { describe, it, expect } from 'vitest';
import { parseContributionToGrid, ContributionDay } from './parseContributionToGrid';

describe('parseContributionToGrid', () => {
  it('returns fallbackData when contributions is empty or undefined', () => {
    const fallback = [[0, 1, 2, 3, 4, 0, 1]];
    expect(parseContributionToGrid(undefined, fallback)).toBe(fallback);
    expect(parseContributionToGrid([], fallback)).toBe(fallback);
  });

  it('returns empty array when contributions and fallbackData are empty/undefined', () => {
    expect(parseContributionToGrid()).toEqual([]);
  });

  it('parses array of contribution days into 7-day week chunks', () => {
    const mockContributions: ContributionDay[] = Array.from({ length: 14 }, (_, i) => ({
      date: `2026-01-${String(i + 1).padStart(2, '0')}`,
      count: i,
      level: i % 5,
    }));

    const result = parseContributionToGrid(mockContributions);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual([0, 1, 2, 3, 4, 0, 1]);
    expect(result[1]).toEqual([2, 3, 4, 0, 1, 2, 3]);
  });

  it('slices only the last 52 weeks if contributions contain more than 52 weeks', () => {
    // 60 weeks of 7 days = 420 days
    const mockContributions: ContributionDay[] = Array.from({ length: 420 }, () => ({
      date: '2026-01-01',
      count: 1,
      level: 1,
    }));

    const result = parseContributionToGrid(mockContributions);
    expect(result).toHaveLength(52);
  });
});
