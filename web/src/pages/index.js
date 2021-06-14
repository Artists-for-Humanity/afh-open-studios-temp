import groq from 'groq';

import client from '@client';
import { LandingHero, LandingSteps, Link } from '@components';
import { isLastVisitOutdated, useIsMounted } from '@utils';
import s from './styles/index.module.scss';

const Index = ({ heading, background_images, cta, steps, siteOptions }) => {
  const isMounted = useIsMounted();
  const { logo } = siteOptions;
  let ctaLink = '/introduction';

  if (isMounted && isLastVisitOutdated()) {
    ctaLink = '/check-in';
  }

  return (
    <main>
      <LandingHero
        heading={heading}
        backgrounds={background_images}
        logo={logo}
      />
      <Link className={s.cta} href={ctaLink}>
        {cta}
      </Link>
      <LandingSteps steps={steps} />
    </main>
  );
};

export const getServerSideProps = async () => {
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
