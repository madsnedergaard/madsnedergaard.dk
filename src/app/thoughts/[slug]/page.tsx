// oxlint-disable no-html-link-for-pages
import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/utils/posts';
import Header from '@/components/Header';
import { PostIntro } from '@/components/PostIntro';
import { Metadata } from 'next';
import { Toc } from '@stefanprobst/rehype-extract-toc';
import Link from 'next/link';

const TableOfContents = ({ title, items }: { title: string; items: Toc }) => {
  return (
    <div className="sticky top-24">
      <div className="mb-4">
        <h3 className="text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          Table of Contents
        </h3>
        <p className="mt-1 mb-0 line-clamp-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {title}
        </p>
      </div>
      <nav>
        <ul className="mt-0 list-none space-y-1.5 ps-0">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="block text-sm font-normal text-zinc-500 decoration-black/20 transition-colors hover:text-zinc-900 hover:decoration-black/50 dark:text-zinc-400 dark:decoration-white/20 dark:hover:text-zinc-100"
              >
                {item.value}
              </Link>
              {item.children && (
                <ul className="list-none space-y-1.5 ps-0">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        href={`#${child.id}`}
                        className="block text-xs font-normal text-zinc-600 decoration-black/10 transition-colors hover:text-zinc-900 hover:underline hover:decoration-black/50 dark:text-zinc-400 dark:decoration-white/10 dark:hover:text-zinc-100"
                      >
                        {child.value}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    if (!post) {
      return notFound();
    }
    const { parsedContent: Content, toc, ...meta } = post;

    const showToc = toc && toc.length > 0 && meta.readingTime > 2;
    console.log(showToc, toc, toc?.length, meta.readingTime);

    const emailSubject = `Feedback on ${post.title}`;
    const feedbackEnabled = meta.feedbackDisabled ? false : true;

    return (
      <div>
        <Header />
        <article className="prose prose-zinc dark:prose-invert prose-code:before:content-none prose-code:after:content-none container mx-auto px-4 pb-8 sm:px-2">
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
          <div className="flex max-w-screen gap-8">
            <main className="mx-auto max-w-4xl flex-1">
              <Content />
            </main>
            {showToc && (
              <aside className="hidden w-64 flex-shrink-0 lg:block">
                <TableOfContents title={meta.title} items={toc} />
              </aside>
            )}
          </div>
        </article>
        {feedbackEnabled && (
          <footer className="mt-12 pb-8 text-center text-sm text-zinc-500">
            <div className="mx-auto mb-8 w-40 overflow-hidden">
              <svg
                className="h-4 w-60 text-zinc-500 dark:text-zinc-700"
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
            </div>
            <p>
              I'd genuinely love to hear your thoughts on this topic,
              <br />
              please{' '}
              <a
                // Seems like email obfuscation isn't really worth it these days
                href={`mailto:feedback@madsnedergaard.dk?subject=${emailSubject}`}
                className="group border-b border-zinc-500 transition-all hover:border-zinc-50 hover:pb-1 dark:hover:border-zinc-800"
              >
                <span className="animate-rainbow-text dark:via-secondary from-[#3494E6] via-[#5961DF] to-[#EC6EAD] bg-clip-text italic group-hover:bg-gradient-to-r group-hover:text-transparent dark:to-[#EC6EAD]">
                  shoot me an email
                </span>
              </a>{' '}
              and lets chat 🙏
            </p>
          </footer>
        )}
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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  return {
    title: post?.title.replace('\\n', '') || 'Blog Post',
    description: 'Blog post by Mads Nedergaard',
  };
}
