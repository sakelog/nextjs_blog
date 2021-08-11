import PageList from '@layout/headerNav/pageList';
import SocialIcon from '@components/socialIcon';

import style from '@styles/drawerList.module.scss';

const DrawerList = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.socialIcon}>
        <SocialIcon />
      </div>
      <PageList />
    </div>
  );
};

export default DrawerList;
