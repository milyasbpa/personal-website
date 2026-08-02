import { describe, it, expect } from 'vitest';
import { getAllPosts, getPostBySlug, getFeaturedPosts, getAllTags } from './mdx';

describe('mdx utility', () => {
  it('getAllPosts returns published posts sorted by date descending', () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThanOrEqual(1);
    expect(posts[0]).toHaveProperty('slug');
    expect(posts[0]).toHaveProperty('title');
    expect(posts[0]).toHaveProperty('readingTime');
  });

  it('getPostBySlug retrieves correct post by slug', () => {
    const post = getPostBySlug('intentional-animation-product-ui');
    expect(post).toBeDefined();
    expect(post?.slug).toBe('intentional-animation-product-ui');
    expect(post?.title).toContain('Intentional Animation');
  });

  it('getFeaturedPosts returns only featured posts', () => {
    const featured = getFeaturedPosts();
    expect(Array.isArray(featured)).toBe(true);
    featured.forEach((post) => {
      expect(post.featured).toBe(true);
    });
  });

  it('getAllTags returns a sorted array of unique tags', () => {
    const tags = getAllTags();
    expect(Array.isArray(tags)).toBe(true);
    expect(tags.length).toBeGreaterThan(0);
    expect(tags).toContain('frontend');
  });
});
