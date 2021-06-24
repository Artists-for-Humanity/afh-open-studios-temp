import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * This class is an override of Next's default
 * Document component.
 *
 * The only change is in the `script` tag for
 * fontawesome icons.
 */
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            src="https://kit.fontawesome.com/f9c2d11971.js"
            crossOrigin="anonymous"
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
