import Head from 'next/head';
import groq from 'groq';
import { Switch, Case } from 'react-if';

import client from '@client';
import { Navigation, Footer } from '@components';
import '../styles/index.scss';

function App({ Component, pageProps, router, props }) {
  const { navigation, footer } = props;
  const { pathname } = router;

  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/f9c2d11971.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Switch>
        <Case condition={pathname === '/explore'}>
          <Navigation
            checkpoints={navigation.checkpoints}
            cta={navigation.finish_tour_cta}
          />
        </Case>
      </Switch>

      <Component {...pageProps} />
      <Footer {...footer} />
    </>
  );
}

App.getInitialProps = async () => {
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
      navigation,
      footer,
    },
  };
};

export default App;
