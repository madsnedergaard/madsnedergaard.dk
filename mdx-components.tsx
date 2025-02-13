import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import { PostLayout } from './pages/posts/layout';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // This wrapper component will be used for all MDX files in posts/
  const PostWrapper = ({ children }: { children: React.ReactNode }) => {
    // Get the frontmatter from the MDX module
    const { frontmatter } = (children as any).type;
    if (!frontmatter) return <>{children}</>;

    return <PostLayout frontmatter={frontmatter}>{children}</PostLayout>;
  };

  return {
    // Add your custom components here
    // wrapper: PostWrapper,
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
