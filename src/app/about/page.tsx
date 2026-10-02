import Avatar from '@/components/Avatar';
import Header from '@/components/Header';
import Highlight from '@/components/Highlight';
import NavLink from '@/components/NavLink';

const Link = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="hover:text-primary underline-offset-3 transition-all hover:underline-offset-4"
  >
    {children}
  </a>
);

export default async function Page() {
  const firstDayOfWork = new Date('2014-02-01');
  const timeSinceFirstDayOfWork = new Date().getTime() - firstDayOfWork.getTime();
  const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
  const timeAtWork = Math.round((timeSinceFirstDayOfWork / millisecondsPerYear) * 100) / 100;

  return (
    <div>
      <Header className="max-w-screen-lg" />
      <article className="prose prose-zinc prose-h2:mt-4 dark:prose-invert mx-auto max-w-screen-lg px-8 pb-8 md:px-2 lg:px-2">
        <div className="text-center sm:mt-2">
          <h1 className="m-4 mb-3 text-3xl font-bold sm:text-4xl">About me</h1>
          <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-500">
            You found your way here, <br />
            so an introduction seems in place...
          </p>
          <svg
            className="mx-auto mt-6 mb-4 h-4 w-60 text-zinc-500 sm:mb-8 sm:w-80 dark:text-zinc-700"
            viewBox="0 0 320 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 8 Q20 0 40 8 T80 8 T120 8 T160 8 T200 8 T240 8 T280 8 T320 8"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <section className="mx-auto flex flex-col items-center text-pretty">
          <div className="flex max-w-sm flex-col items-center text-center sm:flex-row sm:gap-4 sm:text-left">
            <h2 className="text-pretty">
              I'm Mads,
              <br />
              <Highlight>software engineer</Highlight> at work and{' '}
              <Highlight variant="pink">dad with a garden</Highlight> at home.
            </h2>
            <Avatar />
          </div>
          <div className="flex w-full max-w-[40ch] flex-col text-center sm:text-left sm:[&>p+p]:mt-3 [&>p:not(:last-child)]:mb-0">
            <p>
              Currently working as <Highlight variant="pink">Staff Engineer</Highlight> at{' '}
              <Link href="https://electricitymaps.com/">Electricity Maps</Link>, doing my best to
              make the world a greener place and solving{' '}
              <strong>real problems for real people</strong>.
            </p>
            <p>
              I have been doing full-stack for the last{' '}
              <Highlight variant="pink">
                <span className="tabular-nums">{timeAtWork}</span> years
              </Highlight>
              , mostly in the <Highlight variant="pink">land of TS/JS</Highlight> with side quests
              in Python and PHP.
            </p>
            <p className="">
              While I have been swinging{' '}
              <Link href="https://charity.wtf/2017/05/11/the-engineer-manager-pendulum/">
                the pendulum of IC / technical leadership
              </Link>
              , I keep finding myself drawn back into the{' '}
              <span className="glitch-effect">magic of code 🪄</span>
            </p>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <div className="flex flex-row space-x-4">
              <NavLink href="https://github.com/madsnedergaard">Github</NavLink>
              <NavLink href="https://linkedin.com/in/madsnedergaard">LinkedIn</NavLink>
              <NavLink href="https://bsky.app/profile/madsnedergaard.dk">BlueSky</NavLink>

              <NavLink href="https://www.goodreads.com/user/show/16531967-mads-nedergaard">
                Goodreads
              </NavLink>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
