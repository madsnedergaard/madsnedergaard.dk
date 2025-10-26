import fs from 'node:fs/promises';
import * as path from 'node:path';
import matter from 'gray-matter';
import type { Toc } from '@stefanprobst/rehype-extract-toc';

export interface PostMeta {
  title: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  readingTime: number;
  slug: string;
  feedbackDisabled?: boolean;
  toc?: Toc;
}

export type Post = PostMeta & { content: string; parsedContent: any };

const POSTS_PATH = path.join(process.cwd(), 'src/posts');

export async function getPosts(): Promise<PostMeta[]> {
  const filenames = await fs.readdir(POSTS_PATH);

  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith('.mdx') && !filename.startsWith('_'))
      .map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, '');
        const fullPath = path.join(POSTS_PATH, filename);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          title: data.title || slug,
          createdAt: data.createdAt || '',
          updatedAt: data.updatedAt || '',
          tags: data.tags || [],
          slug: slug,
          feedbackDisabled: data.feedbackDisabled || false,
          readingTime: Math.max(1, Math.round(content.split(/\s+/).length / 200)),
        };
      })
  );

  // Helper function to parse "Month YYYY" format to Date
  const parseCreatedAt = (dateStr: string): Date => {
    if (!dateStr) return new Date(0); // fallback for empty dates

    // Handle "Month YYYY" format
    const parts = dateStr.trim().split(' ');
    if (parts.length === 2) {
      const month = parts[0];
      const year = parseInt(parts[1]);

      const monthMap: { [key: string]: number } = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11,
      };

      const monthIndex = monthMap[month];
      if (monthIndex !== undefined && !isNaN(year)) {
        return new Date(year, monthIndex, 1);
      }
    }

    // Fallback to standard Date parsing
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? new Date(0) : parsed;
  };

  // Sort posts by createdAt date
  return posts.sort((a, b) => {
    const dateA = parseCreatedAt(a.createdAt);
    const dateB = parseCreatedAt(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  try {
    const source = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(source);
    const parsedContent = await import(`@/posts/${slug}.mdx`);
    return {
      title: data.title || slug,
      updatedAt: data.updatedAt || '',
      createdAt: data.createdAt || '',
      readingTime: Math.max(1, Math.round(content.split(/\s+/).length / 200)),
      tags: data.tags || [],
      slug: slug,
      content,
      feedbackDisabled: data.feedbackDisabled || false,
      parsedContent: parsedContent.default,
      toc: parsedContent.tableOfContents,
    };
  } catch {
    return null;
  }
}
