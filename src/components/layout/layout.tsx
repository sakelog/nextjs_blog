import React from 'react';
import config from '../config';

import Header from './_header';
import Footer from './_footer';

import '../../styles/css/mystyle.css';

const GTM_ID = config.GTM_ID;
const GTMScript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

const Layout = (props: any) => {
  return (
    <>
      <div className="l-wrapper">
        <Header />
        <main className="l-main">{props.children}</main>
        <Footer />
      </div>
      <noscript dangerouslySetInnerHTML={{ __html: GTMScript }} />
    </>
  );
};

export default Layout;
