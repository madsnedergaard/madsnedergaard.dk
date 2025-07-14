import fs from 'node:fs/promises';
import * as path from 'node:path';
import matter from 'gray-matter';

export interface PostMeta {
  title: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  readingTime: number;
  slug: string;
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
          // data: data,
          readingTime: Math.max(1, Math.round(content.split(/\s+/).length / 200)),
        };
      })
  );

  // Sort posts by updatedAt date
  return posts.sort((a, b) => {
    const dateA = new Date(a.updatedAt);
    const dateB = new Date(b.updatedAt);
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
      parsedContent: parsedContent.default,
    };
  } catch {
    return null;
  }
}
