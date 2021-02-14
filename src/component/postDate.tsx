import { format } from 'date-fns';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import UpdateIcon from '@material-ui/icons/Update';
import { List, ListItem } from '@material-ui/core';

type propsType = {
  postdate: string;
  update?: string;
};

const PostDate: React.FC<propsType> = (props) => {
  const postDateTag = (
    <ListItem>
      <CalendarTodayIcon style={{ fontSize: '1.4rem' }} />
      {getFormatDate(props.postdate)}
    </ListItem>
  );
  const updateTag = props.update && (
    <ListItem>
      <UpdateIcon style={{ fontSize: '1.4rem' }} />
      {getFormatDate(props.update)}
    </ListItem>
  );

  return (
    <List>
      {postDateTag}
      {updateTag}
    </List>
  );
};

export default PostDate;

function getFormatDate(date: string) {
  const formatDate = format(new Date(date), 'yyyy年M月d日');

  return formatDate;
}
