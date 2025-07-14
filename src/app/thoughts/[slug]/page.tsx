import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/utils/posts';
import Header from '@/components/Header';
import { PostIntro } from '@/components/PostIntro';
import { Metadata } from 'next';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    if (!post) {
      return notFound();
    }
    const { parsedContent: Content, ...meta } = post;

    return (
      <div>
        <Header />
        <article className="prose prose-zinc dark:prose-invert container mx-auto px-2 pb-8">
          <PostIntro data={meta} />
          <svg
            className="mx-auto mt-6 mb-8 h-4 w-80 text-zinc-500 dark:text-zinc-700"
            viewBox="0 0 320 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 8 Q20 0 40 8 T80 8 T120 8 T160 8 T200 8 T240 8 T280 8 T320 8"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <Content />
        </article>
      </div>
    );
  } catch {
    return notFound();
  }
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  return {
    title: post?.title || 'Blog Post',
    description: 'Blog post by Mads Nedergaard',
  };
}
