import { useDispatch } from 'react-redux';
import state from '@state/ducks/index';
import { MdClose } from 'react-icons/md';

import Search from '@layout/headerNav/search/search';
import PageList from '@layout/headerNav/pageList';
import SocialIcon from '@component/socialIcon';

import styles from '@styles/project/_p-header.module.scss';
import headingStyles from '@styles/component/_c-heading.module.scss';

const Drawer: React.FC = () => {
  const handleClose = () => dispatch(drawerState.drawerOperations.close());
  const dispatch = useDispatch();
  const drawerState = state.drawerState;
  return (
    <>
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
        <Search />
        <h2 className={styles.heading + ' ' + headingStyles.flexCenter}>
          連絡先
        </h2>
        <div className={styles.socialIcon}>
          <SocialIcon />
        </div>
      </div>
    </>
  );
};

export default Drawer;
