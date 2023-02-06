import React from 'react';
import Header from '../components/Header';

const LinkEntry = ({ children, subtitle, href }) => (
  <a
    href={href}
    className="flex w-full items-center rounded-md  pr-4 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900"
  >
    <Entry subtitle={subtitle}>{children}</Entry>
    <div className="arrow">→</div>
  </a>
);

const Entry = ({ children, subtitle }) => (
  <div className="flex w-full flex-col">
    <div className="w-full rounded-md p-2 px-3 ">
      <span className="block">{children}</span>
      <div className="mt-1 flex flex-wrap">
        <span className="mr-2 text-xs text-zinc-400">{subtitle}</span>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto flex flex-col items-center dark:text-white sm:pt-10">
        <p className="mb-2 text-center text-4xl font-bold text-zinc-900">About Mads Nedergaard</p>
        <section className={`flex max-w-lg flex-col `}>
          <p className="mb-4 text-center text-lg text-zinc-800">
            Dad, software developer, climate worrier
          </p>
          <div className="self-center">
            <Entry subtitle="Working on climate change since 2020">
              Tech lead @{' '}
              <a
                href="https://electricitymaps.com"
                className="border-b-2 border-zinc-300 text-zinc-500 transition hover:border-black hover:text-black dark:border-zinc-400 dark:text-zinc-400 dark:hover:border-white dark:hover:text-white"
              >
                Electricity Maps
              </a>
            </Entry>
          </div>
          <hr className="my-6 w-80 border-zinc-200 dark:border-zinc-600" />
          <p className="text-center text-xl">honorable tools</p>
          <p className="mt-1 text-center text-zinc-500">
            These tools are so great that I wrote a blog post for each!
          </p>
          <div className="flex flex-col space-y-2 pt-2">
            <div className="items-top flex flex-col space-y-2">
              <LinkEntry href="setup/arc" subtitle="Browser that makes the internet nicer to use">
                Arc
              </LinkEntry>
              <LinkEntry
                href="setup/tana"
                subtitle="Where I write everything (notes, todos, blogposts)"
              >
                Tana
              </LinkEntry>
              <LinkEntry href="setup/raycast" subtitle="Launcher + window management + more">
                Raycast
              </LinkEntry>
              <LinkEntry href="setup/vscode" subtitle="Editor of choice">
                VSCode
              </LinkEntry>
              <LinkEntry href="setup/hyper" subtitle="Terminal - customizable and flexible">
                Hyper w/ zsh
              </LinkEntry>
              {/* <LinkEntry href="tools/" subtitle="Open-source PW manager">
                Bitwarden
              </LinkEntry> */}
              <LinkEntry
                href="setup/keyboard"
                subtitle="Hyper key enabler - see post about keyboard automation"
              >
                Karabiner Elements
              </LinkEntry>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
