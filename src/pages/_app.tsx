import '../styles/mystyle.scss';
import App, { AppProps } from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps }: AppProps = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
