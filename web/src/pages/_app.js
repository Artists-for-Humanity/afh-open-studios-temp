import groq from 'groq';

import client from '@client';
import { Footer, SEO } from '@components';
import { GROQ } from '@utils/constants';
import '../styles/index.scss';

function App({ Component, pageProps, router, props }) {
  const { footer, siteOptions, navigation } = props;
  const { seo } = siteOptions;

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
