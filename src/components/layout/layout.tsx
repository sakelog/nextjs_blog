import { useEffect, useState } from 'react';

import { getWindowSize } from '../../lib/getWindowSize';

import Header from './_header';
import Footer from './_footer';

import wrapperStyles from '../../styles/Layout/_l-wrapper.module.scss';
import mainStyles from '../../styles/Layout/_l-main.module.scss';

const Layout = (props) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    handleSetWindowSize();
    window.addEventListener('resize', handleSetWindowSize);
    window.addEventListener('orientationchange', handleSetWindowSize);
    return () => {
      window.removeEventListener('resize', handleSetWindowSize);
      window.removeEventListener('orientationchange', handleSetWindowSize);
    };
  }, []);
  const handleSetWindowSize = () => {
    const thisWindowSize = getWindowSize();
    setWindowSize(thisWindowSize);
  };
  return (
    <div
      className={wrapperStyles.root}
      style={{ minHeight: windowSize.height }}
    >
      <Header />
      <main className={mainStyles.root}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
