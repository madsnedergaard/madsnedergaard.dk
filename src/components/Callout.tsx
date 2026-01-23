import { BookOpenTextIcon, FlagIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

type Size = 'sm' | 'md';

const variantClasses = {
  primary: {
    wrapper: 'border-primary',
    title: 'text-primary',
    text: '',
  },
  yellow: {
    wrapper: 'border-amber-200 dark:border-yellow',
    title: 'text-amber-500 dark:text-yellow',
    text: '',
  },
  gray: {
    wrapper: 'border-transparent py-4 rounded-md bg-zinc-200 dark:bg-zinc-900/50',
    title: '',
    text: 'sm:text-sm dark:text-zinc-300/80',
  },
} as const;

const sizeClasses = {
  sm: {
    text: 'sm:text-sm',
  },
  md: {
    text: 'sm:text-lg',
  },
} as const;

const Callout = ({
  title,
  icon,
  color,
  children,
  size = 'md',
}: {
  title?: string;
  icon: React.ReactNode;
  color: keyof typeof variantClasses;
  children: React.ReactNode;
  size?: Size;
}) => {
  const variantClass = variantClasses[color];
  const sizeClass = sizeClasses[size];

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
        className={cn(
          'text-zinc-600 dark:text-zinc-400 [&>p]:m-0',
          variantClass.text,
          sizeClass.text
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const TLDR = ({ size, children }: { size: Size; children: React.ReactNode }) => (
  <Callout
    title="tl;dr"
    icon={<BookOpenTextIcon size={18} strokeWidth={2} />}
    color="primary"
    size={size}
  >
    {children}
  </Callout>
);

export const Disclaimer = ({ size, children }: { size: Size; children: React.ReactNode }) => (
  <Callout
    title="Disclaimer"
    icon={<FlagIcon size={18} strokeWidth={2} />}
    color="yellow"
    size={size}
  >
    {children}
  </Callout>
);

export const Subtle = ({ size, children }: { size: Size; children: React.ReactNode }) => (
  <Callout icon={<FlagIcon size={18} strokeWidth={2} />} color="gray" size={size}>
    {children}
  </Callout>
);
