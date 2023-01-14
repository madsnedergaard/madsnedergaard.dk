import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostData {
  title: string;
  updatedAt: string;
  createdAt: string;
  tags?: string[];
}

interface Post {
  data: PostData;
}
interface PostWithContent extends Post {
  content: string;
}
export interface PostWithSlug extends Post {
  slug: string;
}

export const getPost = (slug: string): PostWithContent => {
  const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data: data as PostData,
    content,
  };
};

export const getPosts = (): PostWithSlug[] => {
  // Return empty object if path doesn't exist
  if (!fs.existsSync(path.join('posts'))) {
    return [];
  }

  const files = fs.readdirSync(path.join('posts'));
  const allPostsData = files
    .filter((file) => path.extname(file) === '.mdx')
    .map((fileName) => {
      const slug = fileName.replace('.mdx', '');
      const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        data: data as PostData,
      };
    });

  return allPostsData;
};
