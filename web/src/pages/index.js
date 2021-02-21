import groq from 'groq';

import client from '@client';
import { Navigation } from '@components';
import s from './styles/index.module.scss';

const Index = ({ heading }) => {
  const links = [
    {
      label: 'Explore',
      href: '/explore',
    },
    {
      label: 'afhboston.org',
      href: 'https://www.afhboston.org',
    },
  ];

  return (
    <>
      <Navigation links={links} />
      <main className={s.container}>
        <h1 className={s.heading}>{heading}</h1>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const { heading } = await client.fetch(groq`
    *[_type == 'landingPage']{ heading }[0]
  `);

  return {
    props: {
      heading,
    },
  };
};

export default Index;
