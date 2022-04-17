import React from 'react';
import type { AppProps } from 'next/app';

import '@styles/global.scss';
import GTMScript from '@components/GTM/script';
import Layout from '@layout/Layout';

const MyApp = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
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
