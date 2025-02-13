export default function Highlight({ children }: { children: string }) {
  return <span className="rounded-sm bg-yellow-400 px-1 dark:text-zinc-800">{children}</span>;
}
