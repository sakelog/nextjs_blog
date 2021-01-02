import * as React from 'react';
import { format } from 'date-fns';

// Icons
import { FiCalendar, FiRefreshCw } from 'react-icons/fi';

type propType = {
  postdate: string;
  update: string;
};

const PostDate = ({ postdate, update }: propType) => {
  return (
    <ul className="c-post-date">
      <li className="c-post-date__date-wrapper">
        <FiCalendar />
        <span className="c-post-date__date">{getFormatDate(postdate)}</span>
      </li>
      {update && (
        <li className="c-post-date__date-wrapper">
          <FiRefreshCw />
          <span className="c-post-date__date">{getFormatDate(update)}</span>
        </li>
      )}
    </ul>
  );
};

export default PostDate;

function getFormatDate(date: string) {
  let formatDate: string;
  formatDate = format(new Date(date), 'yyyy年M月d日');

  return formatDate;
}
