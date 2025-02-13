import React from 'react';
import Header from '../../components/Header';
import { PostIntro } from '../../components/PostIntro';
import type { PostData } from '../../utils/posts';

interface PostLayoutProps {
  children: React.ReactNode;
  frontmatter: PostData;
}

export function PostLayout({ children, frontmatter }: PostLayoutProps) {
  return (
    <div>
      <Header />
      <article className="container prose prose-zinc mx-auto px-2 pb-8 dark:prose-invert">
        <PostIntro data={frontmatter} />
        <hr className="mx-auto my-8 w-80 border-zinc-200 dark:border-zinc-600" />
        {children}
      </article>
    </div>
  );
}
