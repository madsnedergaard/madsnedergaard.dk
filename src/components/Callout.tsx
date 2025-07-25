import { BookOpenTextIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

type CalloutType = 'tldr' | 'info' | 'warning';

const CalloutTypes = {
  tldr: {
    title: 'tl;dr',
    icon: <BookOpenTextIcon size={18} strokeWidth={2} />,
    color: 'primary',
  },
  info: {
    title: 'Info',
    icon: <BookOpenTextIcon size={18} strokeWidth={2} />,
    color: 'bg-blue-500',
  },
  warning: {
    title: 'Warning',
    icon: <BookOpenTextIcon size={18} strokeWidth={2} />,
    color: 'bg-amber-500',
  },
};

export const Callout = ({ type, children }: { type: CalloutType; children: React.ReactNode }) => {
  const { title, icon, color } = CalloutTypes[type];

  return (
    <div className={cn('border-l-4 px-6 py-2', `border-${color}`)}>
      <div
        className={cn(
          '-mt-2 mb-2 flex -rotate-2 items-center gap-1 pb-2 text-sm font-bold',
          `text-${color}`
        )}
      >
        {icon} {title}
      </div>
      <div className="text-lg text-zinc-600 dark:text-zinc-400 [&>p]:m-0">{children}</div>
    </div>
  );
};
