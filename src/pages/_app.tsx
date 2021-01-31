import '@styles/mystyle.scss';
import App, { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import createStore from '@state/store';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <Provider store={createStore()}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
