import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src/core/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  featured?: boolean;
  readingTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        published: data.published !== false,
        featured: Boolean(data.featured),
        readingTime: stats.text,
        content,
      } as BlogPost;
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return allPostsData;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}
