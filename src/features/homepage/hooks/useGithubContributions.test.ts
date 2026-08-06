import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useGithubContributions } from './useGithubContributions';

describe('useGithubContributions', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('fetches contribution data and returns parsed gridData and totalContributions', async () => {
    const mockApiResponse = {
      total: { lastYear: 500 },
      contributions: Array.from({ length: 14 }, (_, i) => ({
        date: `2026-01-${i + 1}`,
        count: i,
        level: i % 5,
      })),
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockApiResponse,
    } as Response);

    const { result } = renderHook(() => useGithubContributions('milyasbpa'));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.totalContributions).toBe(500);
    expect(result.current.gridData).toHaveLength(2);
    expect(result.current.error).toBeNull();
  });

  it('handles fetch failure and sets error state', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(() => useGithubContributions('milyasbpa'));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toEqual(new Error('Network error'));
    expect(result.current.gridData).toBeNull();
  });
});
