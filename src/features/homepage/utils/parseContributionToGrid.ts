export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export function parseContributionToGrid(
  contributions?: ContributionDay[],
  fallbackData?: number[][]
): number[][] {
  if (!contributions || contributions.length === 0) {
    return fallbackData || [];
  }

  const weeks: number[][] = [];
  let currentWeek: number[] = [];

  contributions.forEach((day) => {
    currentWeek.push(day.level ?? 0);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks.slice(-52);
}
