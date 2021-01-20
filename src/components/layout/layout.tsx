import React, { lazy, Suspense } from 'react';
import config from '../config';

const Header = lazy(() => import('./_header'));
const Footer = lazy(() => import('./_footer'));

import '../../styles/css/mystyle.css';

const GTM_ID = config.GTM_ID;
const GTMScript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

const Layout = (props: any) => {
  return (
    <>
      <div className="l-wrapper">
        <Suspense fallback={<main className="l-main">{props.children}</main>}>
          <Header />
          <main className="l-main">{props.children}</main>
          <Footer />
        </Suspense>
      </div>
      <noscript dangerouslySetInnerHTML={{ __html: GTMScript }} />
    </>
  );
};

export default Layout;
