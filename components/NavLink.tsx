import classNames from 'classnames';
import React from 'react';

type NavLinkProps = {
  children: string;
  href: string;
  [x: string]: any;
};
export default function NavLink({ children, className, ...props }: NavLinkProps) {
  return (
    <a
      className={classNames(
        'border-b-2 border-zinc-500 text-zinc-500 transition-all hover:border-zinc-800 hover:text-zinc-800 dark:hover:border-zinc-400 dark:hover:text-zinc-400',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
