import Link from 'next/link';

export const AIBadge = () => {
  return (
    <div className="group relative mx-auto mb-2 flex max-w-fit justify-center">
      <div className="absolute left-1/2 z-10 mr-auto ml-auto hidden min-w-max -translate-x-1/2 -translate-y-9.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        <div className="flex flex-col items-center">
          <div className="bg-yellow rounded p-1 px-2 text-center text-sm text-amber-900/80 shadow-lg dark:bg-[#3C3A34] dark:text-amber-200/60 dark:shadow-none">
            This content is hand-written by me without using genAI. Click to learn why 🤔
          </div>
          <div className="clip-bottom bg-yellow h-2 w-2 -translate-y-1/2 rotate-45 dark:bg-[#3C3A34]"></div>
        </div>
      </div>
      <Link
        href="/writing-without-ai"
        className="hover:border-primary hover:text-primary flex max-w-fit rounded-full border border-dashed border-zinc-400/60 px-3 py-0.5 font-mono text-sm text-zinc-600/60 no-underline transition-all hover:cursor-pointer dark:border-zinc-600 dark:text-zinc-400/60 dark:hover:shadow-md"
      >
        Written without AI{' '}
      </Link>
    </div>
  );
};
