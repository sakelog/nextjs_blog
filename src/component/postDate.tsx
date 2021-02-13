import dynamic from 'next/dynamic';
import { format } from 'date-fns';
import { MdEvent, MdUpdate } from 'react-icons/md';
import { ListItem } from '@material-ui/core';
const List = dynamic(() => import('@material-ui/core/List'));

type propsType = {
  postdate: string;
  update?: string;
};

const PostDate: React.FC<propsType> = (props) => {
  const postDateTag = (
    <ListItem>
      <MdEvent />
      {getFormatDate(props.postdate)}
    </ListItem>
  );
  const updateTag = props.update && (
    <ListItem>
      <MdUpdate />
      getFormatDate(props.update)
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
