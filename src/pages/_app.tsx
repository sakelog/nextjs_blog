import React from 'react';
import type { AppProps } from 'next/app';

import GTMScript from '@components/GTM/script';

import '@styles/global.scss';

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <GTMScript />
      )}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
