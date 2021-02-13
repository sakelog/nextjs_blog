import { Divider } from '@material-ui/core';

import PageList from '@layout/headerNav/pageList';
import SocialIcon from '@component/socialIcon';

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
