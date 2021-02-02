import '@styles/mystyle.scss';
import App, { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import createStore from '@state/store';
import { InstantSearch } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <Provider store={createStore()}>
        <InstantSearch indexName="post" searchClient={searchClient}>
          <Component {...pageProps} />
        </InstantSearch>
      </Provider>
    );
  }
}

export default MyApp;
