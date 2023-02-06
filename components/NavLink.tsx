import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import NextLink from 'next/link';

type NavLinkProps = {
  children: string;
  href: string;
  className?: string;
};
export function NavLink({ children, href, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      className={classNames(
        'border-b-2 border-zinc-500 text-zinc-500 transition-all hover:border-zinc-800 hover:text-zinc-800 dark:hover:border-zinc-400 dark:hover:text-zinc-400',
        className
      )}
    >
      {children}
    </a>
  );
}

export function NavLinkInternal({ children, href, className = '' }: NavLinkProps) {
  return (
    <NextLink href={href} legacyBehavior>
      <a
        className={classNames(
          'border-b-2 border-zinc-500 text-zinc-500 transition-all hover:border-zinc-800 hover:text-zinc-800 dark:hover:border-zinc-400 dark:hover:text-zinc-400',
          className
        )}
      >
        {children}
      </a>
    </NextLink>
  );
}
