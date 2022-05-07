import Head from 'next/head';

import config from '@components/config';

type PropsType = {
  pageTitle?: string | null;
  description?: string;
  ogImagePath?: string;
};

const CustomHead = ({
  pageTitle,
  description,
  ogImagePath,
}: PropsType) => {
  const metaTitle = pageTitle
    ? pageTitle + ' | ' + config.title
    : config.title;
  const metaDiscription = description
    ? description
    : config.description;
  const ogpImageSrc =
    ogImagePath ??
    'https://res.cloudinary.com/cl1sakelog/image/upload/v1611678550/sakelog/defaultOGP.png';
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDiscription} />
      <meta property="og:title" content={metaTitle} />
      <meta
        property="og:description"
        content={metaDiscription}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogpImageSrc} />
      <meta
        property="twitter:card"
        content="summary_large_image"
      />
      <meta property="twitter:title" content={metaTitle} />
      <meta
        property="twitter:description"
        content={metaDiscription}
      />
      <meta
        name="theme-color"
        content={config.themeColor}
      />
      <link
        rel="shortcut icon"
        type="image/vnd.microsoft.icon"
        href="/favicon.ico"
      />
      <link
        rel="icon"
        type="image/vnd.microsoft.icon"
        href="/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/img/icon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/icon/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/icon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/img/icon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/img/icon/android-chrome-512x512.png"
      />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};

export default CustomHead;
