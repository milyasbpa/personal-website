'use client';

import { useState, useEffect } from 'react';
import { GITHUB_CONTRIBUTIONS_API_URL, DEFAULT_GITHUB_USERNAME } from '../constants/github';
import { parseContributionToGrid, ContributionDay } from '../utils/parseContributionToGrid';

export interface UseGithubContributionsResult {
  gridData: number[][] | null;
  totalContributions: number | null;
  isLoading: boolean;
  error: Error | null;
}

export function useGithubContributions(
  username: string = DEFAULT_GITHUB_USERNAME
): UseGithubContributionsResult {
  const [gridData, setGridData] = useState<number[][] | null>(null);
  const [totalContributions, setTotalContributions] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(() => Boolean(username));
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!username) {
      return;
    }

    let isMounted = true;

    fetch(`${GITHUB_CONTRIBUTIONS_API_URL}/${username}?y=last`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch GitHub contributions: ${res.statusText}`);
        }
        return res.json();
      })
      .then((json) => {
        if (!isMounted) return;

        if (json?.contributions && Array.isArray(json.contributions)) {
          const parsed = parseContributionToGrid(json.contributions as ContributionDay[]);
          setGridData(parsed);
        }

        if (typeof json?.total?.lastYear === 'number') {
          setTotalContributions(json.total.lastYear);
        }

        setIsLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err instanceof Error ? err : new Error(String(err)));
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [username]);

  return {
    gridData,
    totalContributions,
    isLoading,
    error,
  };
}
