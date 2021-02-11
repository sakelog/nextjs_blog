import '@styles/mystyle.scss';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import createStore from '@state/store';
import { InstantSearch } from 'react-instantsearch-dom';
import { indexName, searchClient } from '@lib/algolia/client';
import { ThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from '@lib/mui/theme';

const MyApp = (props: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles &&
      jssStyles.parentElement &&
      jssStyles.parentElement.removeChild(jssStyles);
  }, []);
  const { Component, pageProps }: AppProps = props;
  return (
    <Provider store={createStore()}>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <ThemeProvider theme={muiTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </InstantSearch>
    </Provider>
  );
};

export default MyApp;
