import Link from 'next/link';

import React from 'react';
import { getPosts, PostMeta } from '../utils/posts';
import NavLink from '@/components/NavLink';
import { ChevronRightIcon } from 'lucide-react';

interface LinkProps {
  children: string;
  postDate: Date;
  tags?: string[];
  href: string;
}
const PostLink = ({ children, postDate, tags, href }: LinkProps) => (
  <Link href={href} className="group relative w-full rounded-md p-2 px-3 transition-all">
    <div className="flex items-center">
      <span className="group-hover:text-primary decoration-primary/0 group-hover:decoration-primary/20 block underline underline-offset-8 transition-all group-hover:underline-offset-4">
        {children.replace('\\n', '')}
      </span>
      <span className="text-primary -translate-x-4 scale-50 opacity-0 transition-all group-hover:translate-x-1 group-hover:scale-100 group-hover:opacity-100">
        <ChevronRightIcon className="mt-0.5 h-4 w-4" />
      </span>
    </div>
    <div className="mt-1 flex flex-wrap">
      <span className="mr-2 text-xs text-zinc-500">
        {postDate.toLocaleDateString('en-GB', { month: 'long', day: '2-digit' })}
      </span>
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

  // Helper function to parse date string to Date
  const parseCreatedAt = (dateStr: string): Date => {
    if (!dateStr) return new Date(0); // fallback for empty dates

    const parts = dateStr.trim().split('/').map(Number);

    // Handle "DD/Month/YYYY" format (e.g., "26/07/2025")
    if (parts.length === 3) {
      const [day, month, year] = parts;

      if (!isNaN(year) && !isNaN(day) && !isNaN(month)) {
        return new Date(year, month - 1, day);
      }
    }

    // Fallback to standard Date parsing
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? new Date(0) : parsed;
  };

  const postsByYear = posts.reduce((acc, post) => {
    const date = parseCreatedAt(post.createdAt);
    const year = date.getFullYear();
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
          <header className="mb-2 flex flex-col items-center text-center">
            <div className="flex flex-row space-x-4">
              {/* <NavLink href="/">/</NavLink> */}
              <NavLink href="/about">About</NavLink>
              {/* <NavLink href="/uses">Uses</NavLink> */}
            </div>
            <h1 className="animate-rainbow-text to-pink my-4 mb-1 bg-gradient-to-r from-[#3494E6] via-[#5961DF] bg-clip-text pb-1 text-4xl font-bold text-transparent sm:text-6xl dark:via-[#fcff9e]">
              Mads Nedergaard
            </h1>
            <p className="text-zinc-500 italic">
              &mdash; and a collection of thoughts on all things software
            </p>
            <svg
              className="mx-auto mt-6 mb-6 h-4 w-80 text-zinc-500 dark:text-zinc-700"
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
                        {posts
                          .sort((a, b) => {
                            const dateA = parseCreatedAt(a.createdAt);
                            const dateB = parseCreatedAt(b.createdAt);
                            return dateB.getTime() - dateA.getTime();
                          })
                          .map((p) => (
                            <PostLink
                              key={p.slug}
                              href={`/thoughts/${p.slug}`}
                              postDate={parseCreatedAt(p.createdAt)}
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
      </main>
    </React.Fragment>
  );
};

export default Home;
