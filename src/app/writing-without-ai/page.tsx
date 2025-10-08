import Header from '@/components/Header';

export default async function Page() {
  const parsedContent = await import(`./content.mdx`);
  const Content = parsedContent.default;
  return (
    <div>
      <Header />
      <article className="prose prose-zinc dark:prose-invert container mx-auto px-4 pb-8 sm:px-2">
        <div className="text-center sm:mt-12">
          <h1 className="m-4 mb-3 text-3xl font-bold sm:text-4xl">Writing without AI</h1>
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
        </div>

        <section>
          <Content />
        </section>
      </article>
    </div>
  );
}
