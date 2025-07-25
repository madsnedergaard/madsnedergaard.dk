import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};
export default function NavLink({ children, href, className = '' }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'border-b-2 border-zinc-500 text-zinc-500 transition-all hover:border-zinc-800 hover:text-zinc-800 dark:hover:border-zinc-400 dark:hover:text-zinc-400',
        className
      )}
    >
      {children}
    </Link>
  );
}
