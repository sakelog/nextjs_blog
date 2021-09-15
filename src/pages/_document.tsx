import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    const GTMNoScript = () => {
      return process.env.NODE_ENV === 'production' ? (
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?
            id=${process.env.NEXT_PUBLIC_GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      ) : null;
    };
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
          <GTMNoScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
