import { format } from 'date-fns';
import { MdEvent, MdUpdate } from 'react-icons/md';

import styles from '../styles/Object/Component/_c-postDate.module.scss';

type propsType = {
  postdate: string;
  update?: string;
};

const PostDate: React.FC<propsType> = (props) => {
  const postDateTag = (
    <span className={styles.date}>
      <span className={styles.dateIcon}>
        <MdEvent />
      </span>
      {getFormatDate(props.postdate)}
    </span>
  );
  const updateTag = props.update && (
    <span className={styles.date}>
      <span className={styles.dateIcon}>
        <MdUpdate />
      </span>
      {getFormatDate(props.update)}
    </span>
  );

  return (
    <div className={styles.root}>
      {postDateTag}
      {updateTag}
    </div>
  );
};

export default PostDate;

function getFormatDate(date: string) {
  const formatDate = format(new Date(date), 'yyyy年M月d日');

  return formatDate;
}
