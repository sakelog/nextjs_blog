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

export default DrawerList;
