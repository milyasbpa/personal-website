import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetailContainer } from '@/features/blog/container/BlogDetailContainer';
import { getAllPosts, getPostBySlug } from '@/core/lib/mdx';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found — bas.',
    };
  }

  return {
    title: `${post.title} — bas.`,
    description: post.description,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) {
    notFound();
  }

  const post = posts[index];
  const nextPost = index > 0 ? posts[index - 1] : undefined;
  const prevPost = index < posts.length - 1 ? posts[index + 1] : undefined;

  return <BlogDetailContainer post={post} prevPost={prevPost} nextPost={nextPost} />;
}
