import groq from 'groq';

import client from '@client';
import { LandingHero, LandingSteps, Link } from '@components';
import { isLastVisitOutdated, useIsMounted } from '@utils';
import s from './styles/index.module.scss';

const Index = ({ landingPage, sponsors, siteOptions }) => {
  const { heading, background_images, cta, steps } = landingPage;
  const isMounted = useIsMounted();
  const { logo } = siteOptions;
  let ctaLink = '/introduction';

  /**
   * We can check localStorage only after the component
   * is mounted (client side).
   *
   * Direct to /check-in if the last visit is outdated.
   */
  if (isMounted && isLastVisitOutdated()) {
    ctaLink = '/check-in';
  }

  return (
    <main>
      <LandingHero
        heading={heading}
        backgrounds={background_images}
        logo={logo}
        sponsors={sponsors}
      />
      <Link className={s.cta} href={ctaLink}>
        {cta}
      </Link>
      <LandingSteps steps={steps} />
    </main>
  );
};

export const getStaticProps = async () => {
  const payload = await client.fetch(groq`{
    "landingPage": *[_type == 'landingPage']{
      heading,
      background_images,
      cta,
      steps
    }[0],
    "sponsors": *[_type == 'sponsors'][0]{
      label,
      sponsors[] {
        name,
        image
      }
    }
  }`);

  return {
    props: payload,
  };
};

export default Index;
