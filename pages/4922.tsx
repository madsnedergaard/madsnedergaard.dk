import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const One = ({ onClick }: { onClick: () => void }) => (
  <main>
    <img src="/captcha.png" onClick={onClick} alt="" />
  </main>
);

const Two = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 7000);
  }, []);
  return (
    <main className="flex h-full w-full  bg-black">
      <section className="flex items-center justify-center">
        <img
          src="/666.gif"
          className={`absolute transition-all duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}
          alt=""
        />
        <video autoPlay loop muted playsInline className="">
          <source src="video.mp4" />
        </video>
      </section>
    </main>
  );
};
const Anton = () => {
  const [isVerified, setIsVerified] = React.useState(false);
  return (
    <>
      <Head>
        <link rel="prefetch" href="video.mp4" as="video" type="video/mp4" />
      </Head>
      {isVerified ? <Two /> : <One onClick={() => setIsVerified(true)} />}
    </>
  );
};

export default Anton;
