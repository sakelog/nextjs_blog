import { useEffect } from 'react';
import { useRouter } from 'next/router';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

// components
import Layout from 'layout';
import GTMScript from '@components/GTM/script';

// style
import 'styles/global.scss';

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
  const { asPath } = useRouter();
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push(
        {}
      );
    } catch (err) {
      console.error(err);
    }
  }, [asPath]);

  const getLayout = Component.LP
    ? (page) => page
    : (page) => <Layout>{page}</Layout>;

  return getLayout(
    <>
      {process.env.NODE_ENV === 'production' && (
        <GTMScript />
      )}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
