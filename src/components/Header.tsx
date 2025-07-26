import NavLink from './NavLink';

export default function Header() {
  return (
    <div className="mb-0 max-w-screen-md p-6 sm:mx-auto">
      <header className="flex flex-row items-center justify-between">
        <p className="animate-rainbow-text bg-gradient-to-r from-[#3494E6] via-[#5961DF] to-[#EC6EAD] bg-clip-text text-transparent italic dark:via-[#fcff9e] dark:to-[#EC6EAD]">
          Thoughts of Mads Nedergaard
        </p>
        <NavLink href="/" className="text-sm">
          Home
        </NavLink>
      </header>
    </div>
  );
}
