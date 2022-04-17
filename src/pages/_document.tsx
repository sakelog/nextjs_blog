import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import GTMNoScript from '@components/GTM/noScript';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href={
              'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
            }
            rel="stylesheet"
          />
          <link
            href={
              'https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP&display=swap'
            }
            rel="stylesheet"
          />
        </Head>
        <body>
          {process.env.NODE_ENV === 'production' && (
            <GTMNoScript />
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
