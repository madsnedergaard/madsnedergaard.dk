import { PostData } from '../utils/posts';

export const PostIntro = ({ data }: { data: PostData }) => (
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
