export default function Avatar() {
  return (
    <div className="relative flex">
      <div className="glowing-hover-effect relative flex size-28 shrink-0 items-center">
        <div className="animate-rainbow-text to-pink dark:via-yellow dark:to-pink absolute block h-full w-full rounded-full bg-gradient-to-r from-[#3494E6] via-[#5961DF] font-bold text-transparent mix-blend-soft-light transition-opacity duration-500 hover:opacity-0" />
        <img src="/avatar.jpg" alt="" className="rounded-full" />
      </div>
    </div>
  );
}
