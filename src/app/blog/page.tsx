import React from 'react';
import type { Metadata } from 'next';
import { BlogsContainer } from '@/features/blogs/container/BlogsContainer';
import { getAllPosts, getAllTags } from '@/core/lib/mdx';

export const metadata: Metadata = {
  title: 'Writing — bas.',
  description:
    'Thoughts on frontend engineering, design systems, and the craft of building interfaces by Ilyas Bashirah.',
};

export default function BlogListingPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return <BlogsContainer posts={posts} tags={tags} />;
}
