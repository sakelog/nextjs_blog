import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

// components
import Script from 'next/script';
import Layout from '@/components/Layout';
// import GTMScript from '@components/GTM/script';

// style
import 'styles/global.scss';

// script
const UIKitScript = () => (
  <Script src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit.min.js" />
);
const GoogleAdScript = () => (
  <Script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5013956882447566"
    crossOrigin="anonymous"
    strategy="afterInteractive"
  />
);

type NextPageWithLayout = NextPage & {
  LP?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const getLayout = Component.LP
    ? (page: ReactElement) => page
    : (page: ReactElement) => <Layout>{page}</Layout>;

  return getLayout(
    <>
      {/* {process.env.NODE_ENV === 'production' && (
        <GTMScript />
      )} */}
      <Component {...pageProps} />
      <UIKitScript />
      <GoogleAdScript />
    </>
  );
};

export default MyApp;
