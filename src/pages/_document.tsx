import Document, { Html, Head, Main, NextScript } from 'next/document';
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

export default MyDocument;
