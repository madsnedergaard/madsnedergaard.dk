import type { GetStaticProps } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

import React from 'react';
import { getPosts, PostWithSlug } from '../utils/posts';
import NavLink from '../components/NavLink';

interface LinkProps {
  children: string;
  updatedAt: string;
  tags?: string[];
  href: string;
}
const PostLink = ({ children, updatedAt, tags, href }: LinkProps) => (
  <React.Fragment>
    <NextLink href={href}>
      <a className="rounded-md p-2 px-4 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900">
        <span className="block">{children}</span>
        <div className="mt-1 flex flex-wrap">
          <span className="mr-2 text-xs text-zinc-400">{updatedAt}</span>
          {tags &&
            tags.map((t: string) => (
              <span key={t} className="mx-1 text-xs text-zinc-500">
                <span className="mr-[1px]">#</span>
                {t}
              </span>
            ))}
        </div>
      </a>
    </NextLink>
  </React.Fragment>
);

interface HomeProps {
  posts: PostWithSlug[];
}
const Home = ({ posts }: HomeProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Mads Nedergaard</title>
        <meta name="description" content="Personal website of Mads Nedergaard, software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex  flex-col items-center space-y-10  pt-20 pb-10 dark:text-white md:pt-40">
        <section className="flex flex-col text-center">
          <p className="text-5xl">🛠</p>
          <h1 className="my-4 text-6xl font-bold">Mads Nedergaard</h1>
          <p className="mb-1 animate-rainbow-text bg-gradient-to-r from-[#3494E6] via-[#5961DF] to-[#EC6EAD] bg-clip-text text-2xl text-transparent dark:via-[#fcff9e] dark:to-[#EC6EAD]">
            A craftsman of the internet
          </p>
          <p className="italic text-zinc-500">
            &ndash; or put more plainly, a software engineer building digital products.
          </p>
          <div className="mt-4 space-x-4">
            <NavLink href="https://twitter.com/mads_nedergaard">Twitter</NavLink>
            <NavLink href="https://github.com/madsnedergaard">Github</NavLink>
            <NavLink href="https://linkedin.com/in/madsnedergaard">LinkedIn</NavLink>
          </div>
        </section>
        <hr className="w-80 border-zinc-200 dark:border-zinc-600" />
        <section className="flex max-w-sm flex-col">
          <p className="text-center font-bold">Pages</p>
          <div className="flex flex-col space-y-2 pt-2">
            {posts.map((p) => (
              <PostLink key={p.slug} href={p.slug} updatedAt={p.data.updatedAt} tags={p.data.tags}>
                {p.data.title}
              </PostLink>
            ))}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps<{ posts: PostWithSlug[] }> = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
