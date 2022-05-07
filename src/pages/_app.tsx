import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

// components
import Layout from 'layout';
import GTMScript from '@components/GTM/script';

// style
import 'styles/global.scss';

const MyApp = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
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

  return (
    <Layout>
      {process.env.NODE_ENV === 'production' && (
        <GTMScript />
      )}
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
