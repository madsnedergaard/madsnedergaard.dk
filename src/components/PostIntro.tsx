import { PostMeta } from '../utils/posts';
import { AIBadge } from './AIBadge';

export const PostIntro = ({ data }: { data: PostMeta }) => (
  <div className="text-center sm:mt-12">
    <AIBadge />
    <h1
      className="m-4 mb-3 text-3xl font-bold sm:text-4xl"
      dangerouslySetInnerHTML={{ __html: data.title.replace('\\n', '<br />') }}
    ></h1>

    <div>
      <div className="text-md mt-2 flex flex-col items-center justify-center space-x-4 text-zinc-400 sm:flex-row sm:text-sm dark:text-zinc-500">
        <span>{data.readingTime} min read</span>
        <span>{data.updatedAt || data.createdAt}</span>
        {data.tags && data.tags.length > 0 && (
          <div className="flex flex-wrap justify-center space-x-1">
            {data.tags?.map((t: string) => (
              <span key={t}>
                <span className="mr-[1px] text-zinc-300 dark:text-zinc-600">#</span>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);
