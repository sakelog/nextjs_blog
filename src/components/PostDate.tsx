import {
  HiOutlineCalendar,
  HiOutlineRefresh,
} from 'react-icons/hi';

import { getFormatDate } from '@lib/util/getFormatDate';

type propsType = {
  postdate: string;
  update: string | null;
};

const PostDate = (props: propsType) => {
  return (
    <ul className="my-2 text-sm flex flex-col items-center">
      <li className="flex items-center space-x-1">
        <HiOutlineCalendar />
        {getFormatDate(props.postdate)}
      </li>
      {props.update && (
        <li className="flex items-center space-x-1">
          <HiOutlineRefresh />
          {getFormatDate(props.update)}
        </li>
      )}
    </ul>
  );
};

export default PostDate;
