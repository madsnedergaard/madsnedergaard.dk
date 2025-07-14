import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-4 text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-3 text-2xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-2 text-xl font-semibold">{children}</h3>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    img: (props) => (
      <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...(props as ImageProps)} />
    ),
    ...components,
  };
}
