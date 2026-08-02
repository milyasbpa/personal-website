'use client';

import React, { useState, useMemo } from 'react';
import { TagFilter } from '../../components/TagFilter/TagFilter';
import { BlogCard } from '../../components/BlogCard/BlogCard';
import { BLOGS_DICTIONARY } from '../../data/blogsData';
import type { BlogPost } from '../../types';

export interface BlogListSectionProps {
  posts: BlogPost[];
  tags?: string[];
}

export function BlogListSection({ posts, tags = [] }: BlogListSectionProps) {
  const [activeTag, setActiveTag] = useState<string>(BLOGS_DICTIONARY.filtering.allTag);

  const filteredPosts = useMemo(() => {
    if (activeTag === BLOGS_DICTIONARY.filtering.allTag) return posts;
    return posts.filter((post) =>
      post.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase())
    );
  }, [posts, activeTag]);

  return (
    <section aria-labelledby="blog-listing-title" className="py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1
          id="blog-listing-title"
          className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-[var(--fg)]"
        >
          {BLOGS_DICTIONARY.header.title}
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-[var(--fg-muted)] max-w-lg">
          {BLOGS_DICTIONARY.header.description}
        </p>
      </div>

      {/* Tag Filtering */}
      {tags.length > 0 && (
        <div className="mb-6">
          <TagFilter tags={tags} activeTag={activeTag} onSelectTag={setActiveTag} />
        </div>
      )}

      {/* Posts Count */}
      <div className="text-xs font-mono text-[var(--fg-subtle)] mb-4">
        {BLOGS_DICTIONARY.filtering.showingPrefix} {filteredPosts.length}{' '}
        {filteredPosts.length === 1
          ? BLOGS_DICTIONARY.filtering.postSingular
          : BLOGS_DICTIONARY.filtering.postPlural}
      </div>

      {/* Article List */}
      <div className="flex flex-col">
        {filteredPosts.length === 0 ? (
          <div className="py-12 text-center text-sm text-[var(--fg-muted)] border rounded-xl border-dashed border-[var(--border)]">
            {BLOGS_DICTIONARY.filtering.noPosts} &ldquo;{activeTag}&rdquo;.
          </div>
        ) : (
          filteredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              isLast={index === filteredPosts.length - 1}
            />
          ))
        )}
      </div>
    </section>
  );
}
