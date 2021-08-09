import { format } from 'date-fns';
import {
  HiOutlineCalendar,
  HiOutlineRefresh,
} from 'react-icons/hi';

import style from '@styles/postDate.module.scss';

type propsType = {
  postdate: string;
  update?: string;
};

const PostDate = (props: propsType) => {
  const postDateTag = (
    <li className={style.listItem}>
      <HiOutlineCalendar />
      {getFormatDate(props.postdate)}
    </li>
  );
  const updateTag = props.update && (
    <li className={style.listItem}>
      <HiOutlineRefresh />
      {getFormatDate(props.update)}
    </li>
  );

  return (
    <>
      {postDateTag}
      {updateTag}
    </>
  );
};

export default PostDate;

const getFormatDate = (date: string) => {
  const formatDate = format(new Date(date), 'yyyy年M月d日');

  return formatDate;
};
