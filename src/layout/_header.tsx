import Link from 'next/link';
import loadable from '@loadable/component';
import { MdMenu } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import state from '@state/ducks/index';
import config from '@component/config';

const Drawer = loadable(() => import('./headerNav/drawer'));
import styles from '@styles/project/_p-header.module.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const drawerState = state.drawerState;

  const handleOpen = () => dispatch(drawerState.drawerOperations.open());

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
          <Drawer />
        </nav>
      </header>
    </>
  );
};

export default Header;
