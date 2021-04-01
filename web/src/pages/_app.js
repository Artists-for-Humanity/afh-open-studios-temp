import Head from 'next/head';
import groq from 'groq';
import { Switch, Case } from 'react-if';

import client from '@client';
import { Navigation, Footer, SEO } from '@components';
import '../styles/index.scss';

function App({ Component, pageProps, router, props }) {
  const { navigation, footer, siteOptions } = props;
  const { seo } = siteOptions;
  const { pathname } = router;

  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/f9c2d11971.js"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <SEO {...seo} />

      <Switch>
        <Case condition={pathname === '/explore'}>
          <Navigation
            checkpoints={navigation.checkpoints}
            cta={navigation.finish_tour_cta}
          />
        </Case>
      </Switch>

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

  const navigation = await client.fetch(groq`
    *[_type == 'navigation']{
      checkpoints[] {
        _type,
        title,
        checkpoints[]->
      },
      finish_tour_cta
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
      navigation,
      footer,
    },
  };
};

export default App;
