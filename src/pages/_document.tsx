import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import React from 'react';
class MyDocument extends Document {
  render(): JSX.Element {
    const GTMNoScript =
      process.env.NODE_ENV === 'production' &&
      `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
          {GTMNoScript && (
            <noscript dangerouslySetInnerHTML={{ __html: GTMNoScript }} />
          )}
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
