import Head from 'next/head';

import siteMeta from '@components/config';

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
    ? pageTitle + ' | ' + siteMeta.title
    : siteMeta.title;
  const metaDiscription = description
    ? description
    : siteMeta.description;
  const ogpImageSrc =
    ogImagePath ?? `${siteMeta.url}/img/og/top.png`;
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
        content={siteMeta.themeColor}
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://www.googletagmanager.com"
        crossOrigin="anonymous"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};

export default CustomHead;
