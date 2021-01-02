import React from 'react';

import Header from './header';
import Footer from './footer';

import '../../styles/css/mystyle.css';

const Layout = (props: any) => {
  return (
    <div className="l-wrapper">
      <Header />
      <main className="l-main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
