import groq from 'groq';

import client from '@client';
import { Footer, SEO } from '@components';
import '../styles/index.scss';

function App({ Component, pageProps, router, props }) {
  const { footer, siteOptions } = props;
  const { seo } = siteOptions;

  return (
    <>
      <SEO {...seo} />

      <Component {...pageProps} siteOptions={siteOptions} />
      <Footer {...footer} />
    </>
  );
}

App.getInitialProps = async () => {
  const { siteOptions, footer } = await client.fetch(groq`{
    "siteOptions": *[_type == 'siteOptions']{
      logo,
      seo
    }[0],

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
      footer,
    },
  };
};

export default App;
