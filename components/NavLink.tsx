import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  children: string;
  href: string;
  [x: string]: any;
};
export default function NavLink({ children, className, ...props }: NavLinkProps) {
  const isExternal = props.href.startsWith('http');
  const Component = isExternal ? 'a' : Link;

  return (
    <Component
      {...props}
      className={classNames(
        'border-b-2 border-zinc-500 text-zinc-500 transition-all hover:border-zinc-800 hover:text-zinc-800 dark:hover:border-zinc-400 dark:hover:text-zinc-400',
        className
      )}
    >
      {children}
    </Component>
  );
}
