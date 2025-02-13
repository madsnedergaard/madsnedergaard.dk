import { readdirSync } from 'fs';
import { join } from 'path';

export interface PostData {
  title: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
}

export interface PostWithSlug {
  slug: string;
  data: PostData;
}

export const getPosts = async (): Promise<PostWithSlug[]> => {
  const postsDirectory = join(process.cwd(), 'pages/posts');
  const filenames = readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith('.mdx') && !filename.startsWith('_'))
      .map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, '');
        const { frontmatter } = await import(`../pages/posts/${slug}.mdx`);

        return {
          slug: `posts/${slug}`,
          data: frontmatter as PostData,
        };
      })
  );
  // Sort posts by updatedAt date
  return posts.sort((a, b) => {
    const dateA = new Date(a.data.updatedAt);
    const dateB = new Date(b.data.updatedAt);
    return dateB.getTime() - dateA.getTime();
  });
};
