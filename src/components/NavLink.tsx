import { cn } from '@/utils/cn';
import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
};
export default function NavLink({
  children,
  href,
  className = '',
  external = false,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex gap-0.5 text-sm text-zinc-500 underline decoration-zinc-300 underline-offset-[3px] transition-all hover:text-zinc-800 hover:decoration-zinc-500 hover:underline-offset-4 dark:decoration-zinc-600 dark:hover:border-zinc-400 dark:hover:text-zinc-400',
        className
      )}
    >
      {children}
      {external && <ExternalLinkIcon className="size-3 text-zinc-400 dark:text-zinc-600" />}
    </Link>
  );
}
