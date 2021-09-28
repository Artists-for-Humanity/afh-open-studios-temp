import { useEffect } from "react";
import groq from 'groq';
import { useRouter } from "next/router";
import Script from 'next/script'

import client from '@client';
import { Footer, SEO } from '@components';
import { GROQ } from '@utils/constants';
import * as gtag from "../lib/gtag";
import '../styles/index.scss';

/**
 * The App component uses shared Footer and SEO components.
 */
function App({ Component, pageProps, props }) {
  const { footer, siteOptions, navigation } = props;
  const { seo } = siteOptions;
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  return (
    <>
      <SEO {...seo} />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Component
        {...pageProps}
        siteOptions={siteOptions}
        navigation={navigation}
      />

      <Footer {...footer} logo={siteOptions.logo} />
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
