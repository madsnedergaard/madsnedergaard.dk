import { cn } from 'cn';

type Variant = keyof typeof variantClasses;

const variantClasses = {
  default: 'text-primary',
  yellow: 'text-yellow',
  pink: 'text-pink',
} as const;

export default function Highlight({
  variant,
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  return <span className={cn(variantClasses[variant ?? 'default'], className)}>{children}</span>;
}
