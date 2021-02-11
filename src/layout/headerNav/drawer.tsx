import { Divider } from '@material-ui/core';

import PageList from '@layout/headerNav/pageList';
import SocialIcon from '@component/socialIcon';

import styles from '@styles/project/_p-header.module.scss';

const Drawer: React.FC = () => {
  return (
    <div className={styles.navDrawer}>
      <PageList />
      <Divider />
      <div className={styles.socialIcon}>
        <SocialIcon />
      </div>
    </div>
  );
};

export default Drawer;
