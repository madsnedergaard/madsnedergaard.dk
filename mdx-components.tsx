import { cn } from '@/utils/cn';
import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-4 text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-3 text-2xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-2 text-xl font-semibold">{children}</h3>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    a: ({ children, href }) => (
      <a
        href={href}
        className="hover:text-primary underline-offset-2 transition-all hover:underline-offset-4"
      >
        {children}
      </a>
    ),
    img: (props) => {
      const { title, ...imageProps } = props;
      return (
        <span className="mb-4">
          <Image
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className={cn(
              'rounded-md border-2 border-zinc-400/50 shadow-md dark:border-zinc-600/20',
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
