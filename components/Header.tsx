import { NavLinkInternal } from './NavLink';

export default function Header() {
  return (
    <div className="mb-0 p-6">
      <header className="flex flex-row items-center justify-between">
        <NavLinkInternal href="/" className="text-sm">
          Return to index
        </NavLinkInternal>
        <p className="animate-rainbow-text bg-gradient-to-r from-[#3494E6] via-[#5961DF] to-[#EC6EAD] bg-clip-text italic text-transparent dark:via-[#fcff9e] dark:to-[#EC6EAD]">
          Writings of Mads Nedergaard
        </p>
      </header>
    </div>
  );
}
