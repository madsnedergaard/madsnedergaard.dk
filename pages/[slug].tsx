import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPost, getPosts } from '../utils/posts';
import type { PostData } from '../utils/posts';
import Header from '../components/Header';
import dynamic from 'next/dynamic';

const components = {
  Highlight: dynamic(() => import('../components/Highlight')),
  CoffeeComparisonTable: dynamic(() => import('../components/CoffeeComparisonTable')),
};

const IntroSection = ({ data }: { data: PostData }) => (
  <div className="text-center">
    <h1 className="m-4 mb-4 text-3xl font-bold sm:mt-12 sm:text-4xl">{data.title}</h1>
    <div className="text-md mt-2 flex flex-col items-center justify-center space-x-2 sm:flex-row sm:text-sm">
      <time className=" italic text-zinc-500">Updated {data.updatedAt}</time>
      {data.tags && data.tags.length > 0 && (
        <>
          <span className="hidden text-zinc-500 sm:block">&mdash;</span>
          <div className="flex flex-wrap justify-center space-x-1 text-zinc-500 dark:text-zinc-400">
            {data.tags?.map((t: string) => (
              <span key={t}>
                <span className="mr-[1px] text-zinc-400 dark:text-zinc-500">#</span>
                {t}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  </div>
);

interface PostProps {
  data: PostData;
  content: MDXRemoteSerializeResult;
}
export default function Post({ data, content }: PostProps) {
  return (
    <div>
      <Header />
      <article className="container prose prose-zinc mx-auto px-2 pb-8 dark:prose-invert">
        <IntroSection data={data} />
        <hr className="mx-auto my-8 w-80 border-zinc-200 dark:border-zinc-600" />
        <MDXRemote {...content} components={components} />
      </article>
    </div>
  );
}

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

interface StaticProps {
  params: {
    slug: string;
  };
}
export const getStaticProps = async ({ params }: StaticProps) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
