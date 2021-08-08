import loadable from '@loadable/component';
import {
  Divider,
  CircularProgress,
} from '@material-ui/core';

const PageList = loadable(
  () => import('@layout/headerNav/pageList'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);
const SocialIcon = loadable(
  () => import('@components/socialIcon'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);

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
