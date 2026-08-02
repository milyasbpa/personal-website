'use client';

import React from 'react';
import { BlogListSection } from '../fragments/BlogListSection/BlogListSection';
import type { BlogPost } from '../types';

export interface BlogsContainerProps {
  posts: BlogPost[];
  tags: string[];
}

export function BlogsContainer({ posts, tags }: BlogsContainerProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-6 md:py-12">
      <BlogListSection posts={posts} tags={tags} />
    </div>
  );
}
