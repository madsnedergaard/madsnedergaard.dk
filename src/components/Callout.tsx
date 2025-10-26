import { BookOpenTextIcon, FlagIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

const variantClasses = {
  primary: {
    wrapper: 'border-primary',
    title: 'text-primary',
    text: '',
  },
  yellow: {
    wrapper: 'border-yellow dark:border-pink',
    title: 'text-yellow dark:text-pink',
    text: '',
  },
  gray: {
    wrapper: 'border-transparent py-4 rounded-md bg-zinc-200 dark:bg-zinc-900/50',
    title: '',
    text: 'sm:text-sm dark:text-zinc-300/80',
  },
} as const;

const Callout = ({
  title,
  icon,
  color,
  children,
}: {
  title?: string;
  icon: React.ReactNode;
  color: keyof typeof variantClasses;
  children: React.ReactNode;
}) => {
  const variantClass = variantClasses[color];

  return (
    <div
      className={cn(
        'mx-6 border-b-2 py-2 sm:mx-0 sm:border-b-0 sm:border-l-4 sm:px-6',
        variantClass.wrapper
      )}
    >
      {title && (
        <div
          className={cn(
            '-mt-2 mb-2 flex -rotate-2 items-center gap-1 pb-2 text-sm font-bold',
            variantClass.title
          )}
        >
          {icon} {title}
        </div>
      )}
      <div
        className={cn('text-zinc-600 sm:text-lg dark:text-zinc-400 [&>p]:m-0', variantClass.text)}
      >
        {children}
      </div>
    </div>
  );
};

export const TLDR = ({ children }: { children: React.ReactNode }) => (
  <Callout title="tl;dr" icon={<BookOpenTextIcon size={18} strokeWidth={2} />} color="primary">
    {children}
  </Callout>
);

export const Disclaimer = ({ children }: { children: React.ReactNode }) => (
  <Callout title="Disclaimer" icon={<FlagIcon size={18} strokeWidth={2} />} color="yellow">
    {children}
  </Callout>
);

export const Subtle = ({ children }: { children: React.ReactNode }) => (
  <Callout icon={<FlagIcon size={18} strokeWidth={2} />} color="gray">
    {children}
  </Callout>
);
