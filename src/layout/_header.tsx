import Link from 'next/link';
import { MdMenu, MdClose } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import state from '@state/ducks/index';

import config from '@component/config';

import PageList from '@layout/headerNav/pageList';
import SocialIcon from '@component/socialIcon';

import styles from '@styles/project/_p-header.module.scss';
import headingStyles from '@styles/component/_c-heading.module.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const drawerState = state.drawerState;

  const handleOpen = () => dispatch(drawerState.drawerOperations.open());
  const handleClose = () => dispatch(drawerState.drawerOperations.close());

  const SiteTitle = <Link href="/">{config.title}</Link>;
  return (
    <>
      <header className={styles.root}>
        <nav className={styles.navMenu}>
          <div className={styles.navBar}>
            <div className={styles.title}>{SiteTitle}</div>
            <span className={styles.navIcon}>
              <MdMenu onClick={() => handleOpen()} />
            </span>
          </div>
          <div
            className={
              styles.drawerBack +
              ' ' +
              styles[drawerState.drawerSelectors.drawerSelector()]
            }
            onClick={() => handleClose()}
          ></div>
          <div
            className={
              styles.navDrawer +
              ' ' +
              styles[drawerState.drawerSelectors.drawerSelector()]
            }
          >
            <span className={styles.navIcon}>
              <MdClose onClick={() => handleClose()} />
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
