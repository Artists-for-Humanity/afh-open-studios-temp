import groq from 'groq';
import { Switch, Case } from 'react-if';

import client from '@client';
import { Navigation } from '@components';
import '../styles/index.scss';

function App({ Component, pageProps, router, props }) {
  const { navigation } = props;
  const { pathname } = router;

  return (
    <>
      <Switch>
        <Case condition={pathname === '/explore'}>
          <Navigation
            checkpoints={navigation.checkpoints}
            cta={navigation.finish_tour_cta}
          />
        </Case>
      </Switch>
      <Component {...pageProps} />
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

  return {
    props: {
      navigation,
    },
  };
};

export default App;
