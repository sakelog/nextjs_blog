import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import createStore from '@state/store';
import { InstantSearch } from 'react-instantsearch-dom';
import {
  indexName,
  searchClient,
} from '@lib/algolia/client';
import { ThemeProvider } from '@material-ui/core/styles';
import muitheme from '@lib/mui/theme';

import '@styles/global.scss';

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(
      '#jss-server-side'
    );
    jssStyles &&
      jssStyles.parentElement &&
      jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <Provider store={createStore()}>
      <InstantSearch
        indexName={indexName}
        searchClient={searchClient}
      >
        <ThemeProvider theme={muitheme.defaultTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </InstantSearch>
    </Provider>
  );
};

export default MyApp;
