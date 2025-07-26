import Link from 'next/link';

import React from 'react';
import { getPosts, PostMeta } from '../utils/posts';
import NavLink from '@/components/NavLink';

interface LinkProps {
  children: string;
  updatedAt: string;
  tags?: string[];
  href: string;
}
const PostLink = ({ children, updatedAt, tags, href }: LinkProps) => (
  <Link
    href={href}
    className="w-full rounded-md p-2 px-3 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900"
  >
    <span className="block">{children.replace('\\n', '')}</span>
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
  </Link>
);

type PostsByYear = { [key: string]: PostMeta[] };

const Home = async () => {
  const posts = await getPosts();
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.createdAt).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as PostsByYear);

  return (
    <React.Fragment>
      <main className="container mx-auto flex h-full flex-col items-center justify-between pt-4 pb-10 sm:pt-8 dark:text-white">
        <section>
          <header className="flex flex-col items-center text-center">
            <h1 className="animate-rainbow-text my-4 mb-1 bg-gradient-to-r from-[#3494E6] via-[#5961DF] to-[#EC6EAD] bg-clip-text pb-1 text-4xl font-bold text-transparent sm:text-6xl dark:via-[#fcff9e] dark:to-[#EC6EAD]">
              Mads Nedergaard
            </h1>
            <p className="text-zinc-500 italic">
              &mdash; and a collection of thoughts on all things software
            </p>
            <svg
              className="mx-auto mt-6 mb-8 h-4 w-80 text-zinc-500 dark:text-zinc-700"
              viewBox="0 0 320 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0 8 Q20 0 40 8 T80 8 T120 8 T160 8 T200 8 T240 8 T280 8 T320 8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </header>
          <div
            className={`flex max-w-lg flex-col ${
              Object.keys(postsByYear).length < 1 ? 'hidden' : ''
            }`}
          >
            <div className="mx-4 flex flex-col space-y-2 pt-2 sm:mx-2">
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
                            href={`/thoughts/${p.slug}`}
                            updatedAt={p.updatedAt}
                            tags={p.tags}
                          >
                            {p.title.replace('\\n', '')}
                          </PostLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <footer className="space-x-4">
          <NavLink href="https://bsky.app/profile/madsnedergaard.dk">BlueSky</NavLink>
          <NavLink href="https://github.com/madsnedergaard">Github</NavLink>
          <NavLink href="https://linkedin.com/in/madsnedergaard">LinkedIn</NavLink>
        </footer>
      </main>
    </React.Fragment>
  );
};

export default Home;
