import Head from 'next/head';
import groq from 'groq';

import client from '@client';
import { Footer, SEO } from '@components';
import '../styles/index.scss';

const NON_TOUR_ROUTES = ['/'];

function App({ Component, pageProps, router, props }) {
  const { footer, siteOptions } = props;
  const { seo } = siteOptions;

  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/f9c2d11971.js"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <SEO {...seo} />

      <Component {...pageProps} siteOptions={siteOptions} />
      <Footer {...footer} />
    </>
  );
}

App.getInitialProps = async () => {
  const siteOptions = await client.fetch(groq`
    *[_type == 'siteOptions']{
      logo,
      seo
    }[0]
  `);

  const footer = await client.fetch(groq`
    *[_type == 'footer']{
      about,
      contact,
      copyright,
      ctaLink,
      socialMediaLinks
    }[0]
  `);

  return {
    props: {
      siteOptions,
      footer,
    },
  };
};

export default App;
