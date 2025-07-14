import NavLink from './NavLink';
import cx from 'classnames';

export default function Header() {
  return (
    <div className="mb-0 p-6">
      <header className="flex flex-row items-center justify-between">
        <NavLink href="/" className="text-sm">
          Return to index
        </NavLink>
        <p className="animate-rainbow-text bg-gradient-to-r from-[#3494E6] via-[#5961DF] to-[#EC6EAD] bg-clip-text text-transparent italic dark:via-[#fcff9e] dark:to-[#EC6EAD]">
          Thoughts of Mads Nedergaard
        </p>
      </header>
    </div>
  );
}
