import Header from '@/components/Header';
import Link from 'next/link';

function Content() {
  const firstDayOfWork = new Date('2014-02-01');
  const timeSinceFirstDayOfWork = new Date().getTime() - firstDayOfWork.getTime();
  const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
  const timeAtWork = Math.round((timeSinceFirstDayOfWork / millisecondsPerYear) * 100) / 100;

  return (
    <main>
      <p className="text-center">
        I’m a craftsman of the internet, a father of two and a somewhat outdoorsy fella.{' '}
      </p>
      <div className={`mx-auto grid gap-4 sm:grid-cols-2`}>
        <section>
          <h2>work-me</h2>
          <p>
            I’m a <s>full</s> <a href="https://boringtechnology.club/">dull</a> stack software
            engineer, mainly working in TS-land with a bit of Python on the side. Facts:
          </p>
          <ul>
            <li>{timeAtWork} years of coding professionally</li>
            <li>I get high on solving real problems for real people</li>
            <li>Early-stage-ish startups is my happy place 🏡</li>
          </ul>
          <p>I have a bias towards action</p>
        </section>
        <section>
          <h2>private-me</h2>
          <p>Outside of work family is my main priority, but occasionally I try to also: </p>
          <ul>
            <li>keep up with the veggie garden</li>
            <li>grow edible mushrooms (wine caps, lions mane, oysters)</li>
            <li>wakeboard and volunteer at a local cable park (I’m still a noob though)</li>
            <li>Automate our home</li>
            <li>
              Hit the roads on my road bike (don’t check my Strava please, it’s kinda embarrassing
              these days)
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default async function Page() {
  return (
    <div>
      <Header />
      <article className="prose prose-zinc dark:prose-invert mx-auto max-w-screen-lg px-4 pb-8 sm:px-2 lg:px-2">
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
