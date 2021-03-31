import groq from 'groq';

import client from '@client';
import { Navigation, RichText, Image, Link } from '@components';
import s from './styles/index.module.scss';

const Index = ({ heading, background_images, cta, steps }) => {
  return (
    <main className={s.container}>
      <h1>{heading}</h1>
      <Link className={s.cta} href="/explore">
        {cta}
      </Link>
    </main>
  );
};

export const getStaticProps = async () => {
  const payload = await client.fetch(groq`
    *[_type == 'landingPage']{
      heading,
      background_images,
      cta,
      steps
    }[0]
  `);

  return {
    props: payload,
  };
};

export default Index;
