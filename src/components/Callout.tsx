import { BookOpenTextIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

const Callout = ({
  title,
  icon,
  color,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-6 border-b-2 py-2 sm:mx-0 sm:border-b-0 sm:border-l-4 sm:px-6',
        `border-${color}`
      )}
    >
      <div
        className={cn(
          '-mt-2 mb-2 flex -rotate-2 items-center gap-1 pb-2 text-sm font-bold',
          `text-${color}`
        )}
      >
        {icon} {title}
      </div>
      <div className="text-zinc-600 sm:text-lg dark:text-zinc-400 [&>p]:m-0">{children}</div>
    </div>
  );
};

export const TLDR = ({ children }: { children: React.ReactNode }) => (
  <Callout title="tl;dr" icon={<BookOpenTextIcon size={18} strokeWidth={2} />} color="primary">
    {children}
  </Callout>
);
