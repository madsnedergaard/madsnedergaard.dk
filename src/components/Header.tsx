import Link from 'next/link';

export default function Header() {
  return (
    <div className="mb-0 w-full max-w-screen-md p-6 sm:mx-auto">
      <header className="flex flex-row items-center justify-center">
        <Link href="/">
          <p className="animate-rainbow-text to-pink dark:via-yellow dark:to-pink bg-gradient-to-r from-[#3494E6] via-[#5961DF] bg-clip-text text-transparent italic">
            Thoughts of Mads Nedergaard
          </p>
        </Link>
      </header>
    </div>
  );
}
