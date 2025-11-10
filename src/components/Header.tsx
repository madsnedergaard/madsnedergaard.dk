import Link from 'next/link';
import NavLink from './NavLink';

export default function Header() {
  return (
    <div className="mb-0 w-full max-w-screen-md p-6 sm:mx-auto">
      <header className="flex flex-col items-center justify-center space-y-2">
        <Link href="/">
          <p className="animate-rainbow-text to-pink dark:via-yellow dark:to-pink bg-gradient-to-r from-[#3494E6] via-[#5961DF] bg-clip-text text-transparent italic">
            Thoughts of Mads Nedergaard
          </p>
        </Link>
        <div className="flex flex-row space-x-4">
          <NavLink href="/">Posts</NavLink>
          <NavLink href="/about">About me</NavLink>
          {/* <NavLink href="/uses">Uses</NavLink> */}
          <NavLink external href="https://github.com/madsnedergaard">
            Github
          </NavLink>
          <NavLink external href="https://linkedin.com/in/madsnedergaard">
            LinkedIn
          </NavLink>
        </div>
      </header>
    </div>
  );
}
