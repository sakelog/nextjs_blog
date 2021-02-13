import dynamic from 'next/dynamic';
import { Divider } from '@material-ui/core';

const PageList = dynamic(() => import('@layout/headerNav/pageList'));
const SocialIcon = dynamic(() => import('@component/socialIcon'));

import { headerStyles as useStyles } from '@styles/project/header.styles';

const Drawer: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.drawerList}>
      <PageList />
      <Divider />
      <div className={styles.socialIcon}>
        <SocialIcon />
      </div>
    </div>
  );
};

export default Drawer;
