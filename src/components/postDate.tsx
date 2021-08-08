import { format } from 'date-fns';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import UpdateIcon from '@material-ui/icons/Update';
import { ListItem } from '@material-ui/core';

import { postDateStyles as useStyles } from '@styles/component/postDate.style';

type propsType = {
  postdate: string;
  update?: string;
};

const PostDate: React.FC<propsType> = (props) => {
  const styles = useStyles();
  const postDateTag = (
    <ListItem>
      <CalendarTodayIcon className={styles.icon} />
      {getFormatDate(props.postdate)}
    </ListItem>
  );
  const updateTag = props.update && (
    <ListItem>
      <UpdateIcon className={styles.icon} />
      {getFormatDate(props.update)}
    </ListItem>
  );

  return (
    <>
      {postDateTag}
      {updateTag}
    </>
  );
};

export default PostDate;

function getFormatDate(date: string) {
  const formatDate = format(new Date(date), 'yyyy年M月d日');

  return formatDate;
}
