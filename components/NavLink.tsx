import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  children: string;
  href: string;
  className?: string;
};
export default function NavLink({ children, href, className = '' }: NavLinkProps) {
  const isExternal = href.startsWith('http');
  const ComponentWrapper = isExternal ? React.Fragment : Link;

  return (
    <ComponentWrapper href={href}>
      <a
        className={classNames(
          'border-b-2 border-zinc-500 text-zinc-500 transition-all hover:border-zinc-800 hover:text-zinc-800 dark:hover:border-zinc-400 dark:hover:text-zinc-400',
          className
        )}
      >
        {children}
      </a>
    </ComponentWrapper>
  );
}
