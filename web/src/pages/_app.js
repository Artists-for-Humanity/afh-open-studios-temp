import { useEffect } from 'react';
import groq from 'groq';

import client from '@client';
import { Footer, SEO } from '@components';
import { GROQ } from '@utils/constants';
import '../styles/index.scss';

function App({ Component, pageProps, router, props }) {
  const { footer, siteOptions, navigation } = props;
  const { seo } = siteOptions;

  useEffect(() => {
    const lastVisit = window.localStorage.getItem('lastVisit');

    if (lastVisit) {
      const lastVisitDate = new Date(lastVisit);
      const now = new Date();

      const timeDifference = now.getTime() - lastVisitDate.getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);

      if (daysDifference > 6) {
        router.replace('/check-in');
      }
    }
  }, []);

  return (
    <>
      <SEO {...seo} />

      <Component
        {...pageProps}
        siteOptions={siteOptions}
        navigation={navigation}
      />

      <Footer {...footer} />
    </>
  );
}

App.getInitialProps = async () => {
  const { siteOptions, navigation, footer } = await client.fetch(groq`{
    "siteOptions": *[_type == 'siteOptions']{
      logo,
      seo
    }[0],

    "navigation": {
      "studios": ${GROQ.STUDIOS_LIST}
    },

    "footer": *[_type == 'footer']{
      about,
      contact,
      copyright,
      ctaLink,
      socialMediaLinks
    }[0]
  }`);

  return {
    props: {
      siteOptions,
      navigation,
      footer,
    },
  };
};

export default App;
