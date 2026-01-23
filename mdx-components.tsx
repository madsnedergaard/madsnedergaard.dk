import { cn } from '@/utils/cn';
import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ id, children }) => (
      <h1 id={id} className="mb-4 text-3xl font-bold">
        {children}
      </h1>
    ),
    h2: ({ id, children }) => (
      <Link
        href={`#${id}`}
        className="decoration-transparent decoration-2 underline-offset-0 transition-all hover:decoration-black/20 hover:underline-offset-2 dark:hover:decoration-white/20"
      >
        <h2 id={id} className="mb-3 text-2xl font-semibold">
          {children}
        </h2>
      </Link>
    ),
    h3: ({ id, children }) => (
      <Link
        href={`#${id}`}
        className="decoration-transparent decoration-2 underline-offset-0 transition-all hover:decoration-black/20 hover:underline-offset-2 dark:hover:decoration-white/20"
      >
        <h3 id={id} className="mb-2 text-xl font-semibold">
          {children}
        </h3>
      </Link>
    ),
    p: ({ children }) => <p className="mb-4">{children}</p>,
    a: ({ children, href }) => (
      // oxlint-disable-next-line no-html-link-for-pages
      <a
        href={href}
        className="hover:text-primary underline-offset-3 transition-all hover:underline-offset-4"
      >
        {children}
      </a>
    ),
    img: (props) => {
      const { title, ...imageProps } = props;
      // @ts-expect-error - src is not typed correctly
      const isSvg = imageProps.src?.src?.includes('.svg');
      return (
        <span className="mb-4">
          <Image
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className={cn(
              'rounded-md border-zinc-400/50 dark:border-zinc-600/20',
              isSvg ? '' : 'border-2 shadow-md',
              title && 'mb-2'
            )}
            {...(imageProps as ImageProps)}
          />
          {title && (
            <span className="flex justify-center text-sm text-zinc-500 italic">{title}</span>
          )}
        </span>
      );
    },
    ...components,
  };
}
