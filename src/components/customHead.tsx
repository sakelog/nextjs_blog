import Head from 'next/head';

import config from '../components/config';
import GTMScript from '../scripts/gtmScript';

type propsType = {
  pageTitle?: string;
  description?: string;
  imgFLG?: boolean;
};

const CustomHead = (props: propsType) => {
  const metaTitle =
    (props.pageTitle ? props.pageTitle + ' | ' : '') + config.title;
  const metaDiscription = props.description
    ? props.description
    : config.description;
  const ogpImageSrc = props.imgFLG
    ? 'https://res.cloudinary.com/cl1sakelog/image/upload/co_rgb:ffffff,c_fit,w_700,' +
      'l_text:Sawarabi%20Gothic_50_bold:' +
      props.pageTitle +
      '/v1611679454/sakelog/postOGP.png'
    : 'https://res.cloudinary.com/cl1sakelog/image/upload/v1611678550/sakelog/defaultOGP.png';
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDiscription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDiscription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogpImageSrc} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDiscription} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content={config.themeColor} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link
          rel="stylesheet"
          href={
            'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          }
        />
        <link
          href={
            'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
          }
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/ico/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/ico/favicon-16x16.png"
        />
      </Head>
      <GTMScript />
    </>
  );
};

export default CustomHead;
