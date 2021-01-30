import { useEffect, useState } from 'react';

import Link from 'next/link';
import { MdMenu, MdClose } from 'react-icons/md';
import { Router } from 'next/router';

import config from '@component/config';

import PageList from '@layout/headerNav/pageList';
import SocialIcon from '@component/socialIcon';

import styles from '@styles/project/_p-header.module.scss';
import headingStyles from '@styles/component/_c-heading.module.scss';

const Header: React.FC = () => {
  const [state, setState] = useState<string>('');
  useEffect(() => {
    Router.events.on('routeChangeStart', handleInit);
    window.addEventListener('resize', handleInit);
    window.addEventListener('orientationchange', handleInit);
    return () => {
      Router.events.off('routeChangeStart', handleInit);
      window.removeEventListener('resize', handleInit);
      window.removeEventListener('orientationchange', handleInit);
    };
  }, []);
  const handleInit = () => {
    setState('');
  };
  const handleOpen = () => {
    setState('open');
  };
  const handleClose = () => {
    setState('close');
  };
  const SiteTitle = <Link href="/">{config.title}</Link>;
  return (
    <>
      <header className={styles.root}>
        <nav className={styles.navMenu}>
          <div className={styles.navBar}>
            <div className={styles.title}>{SiteTitle}</div>
            <span className={styles.navIcon}>
              <MdMenu onClick={handleOpen} />
            </span>
          </div>
          <div
            className={styles.drawerBack + ' ' + styles[state]}
            onClick={handleClose}
          ></div>
          <div className={styles.navDrawer + ' ' + styles[state]}>
            <span className={styles.navIcon}>
              <MdClose onClick={handleClose} />
            </span>
            <h2 className={styles.heading + ' ' + headingStyles.flexCenter}>
              ページ一覧
            </h2>
            <div className={styles.pageList}>
              <PageList />
            </div>
            <h2 className={styles.heading + ' ' + headingStyles.flexCenter}>
              連絡先
            </h2>
            <div className={styles.socialIcon}>
              <SocialIcon />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
