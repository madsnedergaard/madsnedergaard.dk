import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

import React from 'react';

type NavLink = {
  children: string;
  href: string;
  [x: string]: any;
};
const NavLink = ({ children, ...props }: NavLink) => (
  <a
    className="border-b-2 border-zinc-500 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-400 hover:border-zinc-800 dark:hover:border-zinc-400 transition-all"
    {...props}
  >
    {children}
  </a>
);

type Link = {
  children: string;
  updatedAt: string;
  tags?: string[];
  href: string;
  [x: string]: any;
};
const Link = ({ children, updatedAt, tags, ...props }: Link) => (
  <React.Fragment>
    <NextLink className="p-2 px-4 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all" {...props}>
      <span className="block">{children}</span>
      <span className="text-zinc-400 text-xs mr-2">{updatedAt}</span>
      {tags &&
        tags.map((t: string) => (
          <span key={t} className="text-zinc-500 text-xs mx-1">
            <span className="mr-[1px]">#</span>
            {t}
          </span>
        ))}
    </NextLink>
  </React.Fragment>
);

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Mads Nedergaard</title>
        <meta name="description" content="Personal website of Mads Nedergaard, software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex pt-20 md:pt-40  flex-col items-center space-y-10  container mx-auto pb-10 dark:text-white">
        <section className="flex flex-col text-center">
          <p className="text-5xl">🛠</p>
          <h1 className="text-6xl font-bold my-4">Mads Nedergaard</h1>
          <p
            className="
                    text-2xl mb-1 animate-rainbow-text text-transparent 
                    bg-clip-text bg-gradient-to-r 
                    from-[#3494E6]  
                    via-[#5961DF]
                    dark:via-[#fcff9e]
                    dark:to-[#EC6EAD]
                    to-[#EC6EAD]"
          >
            A craftsman of the internet
          </p>
          <p className="italic text-zinc-500">
            &ndash; or put more plainly, a software engineer building digital products.
          </p>
          <div className="space-x-4 mt-4">
            <NavLink href="https://twitter.com/mads_nedergaard">Twitter</NavLink>
            <NavLink href="#">Github</NavLink>
            <NavLink href="#">LinkedIn</NavLink>
          </div>
        </section>
        <hr className="w-80 border-zinc-200 dark:border-zinc-600" />
        {/* <section className="flex flex-col max-w-sm">
                    <p className="font-bold text-center">Pages</p>
                    <div className="pt-2 space-y-2 flex flex-col">
                        <Link href="/kaffe" updatedAt="2022" tags={['personal']}>
                            Finding the best coffee beans in Denmark
                        </Link>
                        <Link href="/" updatedAt="October 2021" tags={['work', 'management']}>
                            Boring technology
                        </Link>
                        <Link href="/" updatedAt="June 2021" tags={['work', 'thoughts']}>
                            Meditations on Staff+ levels
                        </Link>
                        <Link href="/" updatedAt="2020" tags={['work', 'tech']}>
                            Another subpage topic that goes here
                        </Link>
                        <Link href="/" updatedAt="2020" tags={['work', 'tech']}>
                            Another subpage topic that goes here
                        </Link>
                        <Link href="/" updatedAt="2020" tags={['work', 'tech']}>
                            Another subpage topic that goes here
                        </Link>
                    </div>
                </section> */}
      </main>
    </React.Fragment>
  );
};

export default Home;
