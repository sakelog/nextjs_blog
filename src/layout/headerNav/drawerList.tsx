import dynamic from 'next/dynamic';
import { Divider, CircularProgress } from '@material-ui/core';

const PageList = dynamic(() => import('@layout/headerNav/pageList'), {
  loading: () => <CircularProgress color="secondary" />,
});
const SocialIcon = dynamic(() => import('@component/socialIcon'), {
  loading: () => <CircularProgress color="secondary" />,
});

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
