import { Navigation } from '@components';

import '../styles/index.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default App;
