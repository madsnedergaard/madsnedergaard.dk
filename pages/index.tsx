import type { GetStaticProps } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

import React from 'react';
import { getPosts, PostWithSlug } from '../utils/posts';
import { NavLink, NavLinkInternal } from '../components/NavLink';

interface LinkProps {
  children: string;
  updatedAt: string;
  tags?: string[];
  href: string;
}
const PostLink = ({ children, updatedAt, tags, href }: LinkProps) => (
  <React.Fragment>
    <NextLink href={href} legacyBehavior>
      <a className="w-full rounded-md p-2 px-3 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900">
        <span className="block">{children}</span>
        <div className="mt-1 flex flex-wrap">
          <span className="mr-2 text-xs text-zinc-400">{updatedAt.split(' ').slice(0, 1)}</span>
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
  postsByYear: PostsByYear;
}
const Home = ({ postsByYear }: HomeProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Mads Nedergaard</title>
        <meta name="description" content="Personal website of Mads Nedergaard, software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex  flex-col items-center space-y-10  pt-10 pb-10 dark:text-white sm:pt-20">
        <section className="flex flex-col text-center">
          <p className="text-3xl sm:text-5xl">🛠</p>
          <h1 className="my-4 text-4xl font-bold sm:text-6xl">Mads Nedergaard</h1>
          <p className="mb-1 animate-rainbow-text bg-gradient-to-r from-[#3494E6] via-[#5961DF] to-[#EC6EAD] bg-clip-text text-xl text-transparent dark:via-[#fcff9e] dark:to-[#EC6EAD] sm:text-2xl">
            A craftsman of the internet
          </p>
          <p className="italic text-zinc-500">
            &ndash; or just another software engineer building digital products.
          </p>
          <div className="mt-4 space-x-4">
            <NavLink href="https://twitter.com/mads_nedergaard">Twitter</NavLink>
            <NavLink href="https://github.com/madsnedergaard">Github</NavLink>
            <NavLink href="https://linkedin.com/in/madsnedergaard">LinkedIn</NavLink>
          </div>
        </section>
        <hr className="w-80 border-zinc-200 dark:border-zinc-600" />
        <section
          className={`flex max-w-lg flex-col ${
            Object.keys(postsByYear).length < 1 ? 'hidden' : ''
          }`}
        >
          <p className="text-center text-xl">Writing</p>
          <div className="flex flex-col space-y-2 pt-2">
            {Object.entries(postsByYear)
              .sort(([a], [b]) => Number(b) - Number(a))
              .map(([year, posts]) => (
                <div key={year}>
                  <div className="items-top flex flex-row">
                    <div className="mr-2 flex flex-col items-center">
                      <p className="mt-2 font-bold">{year}</p>
                      <div className="ml-1/2 mt-1 h-full w-[1px] bg-zinc-700" />
                    </div>
                    <div className="flex w-full flex-col">
                      {posts.map((p) => (
                        <PostLink
                          key={p.slug}
                          href={p.slug}
                          updatedAt={p.data.updatedAt}
                          tags={p.data.tags}
                        >
                          {p.data.title}
                        </PostLink>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

type PostsByYear = { [key: string]: PostWithSlug[] };
export const getStaticProps: GetStaticProps<{ postsByYear: PostsByYear }> = () => {
  const posts = getPosts();

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.data.createdAt).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as PostsByYear);

  return {
    props: {
      postsByYear: postsByYear,
    },
  };
};

export default Home;
