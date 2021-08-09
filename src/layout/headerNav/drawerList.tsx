import PageList from '@layout/headerNav/pageList';
import SocialIcon from '@components/socialIcon';

import style from '@styles/drawerList.module.scss';

const DrawerList = () => {
  return (
    <div className={style.wrapper}>
      <PageList />
      <div className={style.socialIcon}>
        <SocialIcon />
      </div>
    </div>
  );
};
/*
import loadable from '@loadable/component';
import {
  Divider,
  CircularProgress,
} from '@material-ui/core';

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
      <Divider />
      <div className={styles.socialIcon}>
        <SocialIcon />
      </div>
    </div>
  );
};
*/

export default DrawerList;
