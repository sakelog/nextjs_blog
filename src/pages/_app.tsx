import '@styles/mystyle.scss';
import App, { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import createStore from '@state/store';
import { InstantSearch } from 'react-instantsearch-dom';
import { indexName, searchClient } from '@lib/algolia/client';
class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <Provider store={createStore()}>
        <InstantSearch indexName={indexName} searchClient={searchClient}>
          <Component {...pageProps} />
        </InstantSearch>
      </Provider>
    );
  }
}

export default MyApp;
