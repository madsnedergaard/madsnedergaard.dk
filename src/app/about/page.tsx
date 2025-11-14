import Header from '@/components/Header';
import NavLink from '@/components/NavLink';
import Link from 'next/link';

function Content() {
  const firstDayOfWork = new Date('2014-02-01');
  const timeSinceFirstDayOfWork = new Date().getTime() - firstDayOfWork.getTime();
  const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
  const timeAtWork = Math.round((timeSinceFirstDayOfWork / millisecondsPerYear) * 100) / 100;

  return (
    <main>
      <div className={`mx-auto grid gap-2 sm:grid-cols-2 sm:gap-4`}>
        <section>
          <h2>Work</h2>
          <p>
            I’m a <s>full</s> <a href="https://boringtechnology.club/">dull</a> stack software
            engineer, mainly working in TS-land with a bit of Python on the side. Facts:
          </p>
          <ul>
            <li>{timeAtWork} years of coding professionally</li>
            <li>I get high on solving real problems for real people </li>
            <li>Early-stage-ish startups is my happy place</li>

            <li>
              Swinging{' '}
              <a href="https://charity.wtf/2017/05/11/the-engineer-manager-pendulum/">
                the pendulum of IC/lead
              </a>{' '}
              roles, but I keep getting drawn back into the magic of code 🪄
            </li>
          </ul>
        </section>
        <section>
          <h2>Personal</h2>
          <p>Outside of work family is my main priority, but occasionally I try to also: </p>
          <ul>
            <li>keep up with the veggie garden</li>
            <li>grow edible mushrooms (wine caps, lions mane, oysters)</li>
            <li>wakeboard at a local cable park (I’m still a noob though)</li>
            <li>Automate our home</li>
            <li>
              Hit the roads on my road bike (don’t check my Strava please, it’s kinda embarrassing
              these days)
            </li>
          </ul>
        </section>
      </div>
      <div className="flex flex-col items-center">
        <h3>Elsewhere on the internet</h3>
        <div className="flex flex-row space-x-4">
          <NavLink href="https://github.com/madsnedergaard">Github</NavLink>
          <NavLink href="https://linkedin.com/in/madsnedergaard">LinkedIn</NavLink>
          <NavLink href="https://www.goodreads.com/user/show/16531967-mads-nedergaard">
            Goodreads
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default async function Page() {
  return (
    <div>
      <Header className="max-w-screen-lg" />
      <article className="prose prose-zinc prose-h2:mt-4 dark:prose-invert mx-auto max-w-screen-lg px-8 pb-8 md:px-2 lg:px-2">
        <div className="text-center sm:mt-12">
          <h1 className="m-4 mb-3 text-3xl font-bold sm:text-4xl">About me</h1>
          <svg
            className="mx-auto mt-6 mb-8 h-4 w-80 text-zinc-500 dark:text-zinc-700"
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

        <section>
          <Content />
        </section>
      </article>
    </div>
  );
}
