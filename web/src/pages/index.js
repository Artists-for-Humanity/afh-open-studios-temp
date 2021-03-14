import groq from 'groq';

import client from '@client';
import { Navigation, RichText, Image } from '@components';
import s from './styles/index.module.scss';

const Index = ({ heading, introduction, epicenterImage, cta, background }) => {
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
        <RichText blocks={introduction} />
        <RichText blocks={background} />
        <Image img={epicenterImage} />
        <button>{cta}</button>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const payload = await client.fetch(groq`
    *[_type == 'landingPage']{
      heading,
      introduction,
      epicenterImage,
      cta,
      background
    }[0]
  `);

  return {
    props: payload,
  };
};

export default Index;
