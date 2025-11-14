import Link from 'next/link';
import NavLink from './NavLink';
import { cn } from '@/utils/cn';

export default function Header({ className }: { className?: string }) {
  return (
    <div className={cn('mb-0 w-full max-w-screen-md p-6 sm:mx-auto', className)}>
      <header className="flex flex-row items-center justify-between">
        <Link href="/">
          <p className="animate-rainbow-text to-pink dark:via-yellow dark:to-pink bg-gradient-to-r from-[#3494E6] via-[#5961DF] bg-clip-text font-bold text-transparent">
            Mads Nedergaard
          </p>
        </Link>
        <NavLink href="/" className="font-mono">
          cd ../
        </NavLink>
      </header>
    </div>
  );
}
