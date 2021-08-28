import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    const GTMScript = () => {
      return process.env.NODE_ENV === 'production' ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
          }}
        />
      ) : null;
    };
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
          <GTMScript />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GTMNoScript />
        </body>
      </Html>
    );
  }
}
