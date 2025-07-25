import { PostMeta } from '../utils/posts';

export const PostIntro = ({ data }: { data: PostMeta }) => (
  <div className="text-center">
    <h1
      className="m-4 mb-3 text-3xl font-bold sm:mt-12 sm:text-4xl"
      dangerouslySetInnerHTML={{ __html: data.title.replace('\\n', '<br />') }}
    ></h1>
    <time className="text-zinc-500 italic">Updated {data.updatedAt}</time>
    <div>
      <div className="text-md mt-2 flex flex-col items-center justify-center space-x-2 sm:flex-row sm:text-sm">
        {data.readingTime} min read
        {data.tags && data.tags.length > 0 && (
          <>
            <span className="ml-2 hidden text-zinc-500 sm:block">&mdash;</span>
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
  </div>
);
