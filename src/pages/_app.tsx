import React from 'react';
import type { AppProps } from 'next/app';
import { InstantSearch } from 'react-instantsearch-dom';
import {
  indexName,
  searchClient,
} from '@lib/algolia/client';

import '@styles/global.scss';

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <InstantSearch
      indexName={indexName}
      searchClient={searchClient}
    >
      <Component {...pageProps} />
    </InstantSearch>
  );
};

export default MyApp;
