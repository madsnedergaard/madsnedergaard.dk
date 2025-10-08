import Link from 'next/link';

export const AIBadge = () => {
  return (
    <div className="group relative mx-auto mb-2 flex max-w-fit justify-center">
      <div className="absolute left-1/2 z-10 mr-auto ml-auto hidden min-w-max -translate-x-1/2 -translate-y-9.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        <div className="flex flex-col items-center">
          <div className="rounded bg-[#3C3A34] p-1 px-2 text-center text-sm text-amber-200/60">
            This content is hand-written by me without using genAI. Click to learn why 🤔
          </div>
          <div className="clip-bottom h-2 w-2 -translate-y-1/2 rotate-45 bg-[#3C3A34]"></div>
        </div>
      </div>
      <Link
        href="/writing-without-ai"
        className="flex max-w-fit rounded-full border border-dashed border-zinc-600 px-3 py-0.5 font-mono text-sm no-underline transition-all hover:cursor-pointer hover:border-zinc-500 hover:text-zinc-400 hover:shadow-md dark:text-zinc-400/60"
      >
        Written without AI{' '}
      </Link>
    </div>
  );
};
