import NavLink from './NavLink';
import cx from 'classnames';

export default function Header() {
  return (
    <div className="mb-0 p-6">
      <header className="flex flex-col items-center justify-between sm:flex-row">
        <p
          className={cx(
            'bg-gradient-to-r from-[#3494E6] via-[#5961DF] to-[#EC6EAD] bg-clip-text text-transparent',
            'mb-2 italic sm:mb-0'
          )}
        >
          A post by Mads Nedergaard
        </p>
        <NavLink href="/" className="text-sm">
          Return to frontpage
        </NavLink>
      </header>
    </div>
  );
}
