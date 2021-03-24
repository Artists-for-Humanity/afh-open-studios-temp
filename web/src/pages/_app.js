import groq from 'groq';

import client from '@client';
import { Navigation } from '@components';
import '../styles/index.scss';

function App({ Component, pageProps, router, props }) {
  const { navigation } = props;

  return (
    <>
      <Navigation
        checkpoints={navigation.checkpoints}
        cta={navigation.finish_tour_cta}
      />
      <Component {...pageProps} />
    </>
  );
}

App.getInitialProps = async (context) => {
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

  return {
    props: {
      navigation,
    },
  };
};

export default App;
