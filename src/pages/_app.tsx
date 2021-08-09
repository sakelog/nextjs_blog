import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import createStore from '@state/store';
import { InstantSearch } from 'react-instantsearch-dom';
import {
  indexName,
  searchClient,
} from '@lib/algolia/client';

import '@styles/global.scss';

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <Provider store={createStore()}>
      <InstantSearch
        indexName={indexName}
        searchClient={searchClient}
      >
        <Component {...pageProps} />
      </InstantSearch>
    </Provider>
  );
};

export default MyApp;
