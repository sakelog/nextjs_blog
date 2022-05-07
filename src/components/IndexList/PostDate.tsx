import { FaCaretRight } from 'react-icons/fa';
import DateDisplay from '@components/DateDisplay';

import { getYMDObject } from '@lib/util/getFormatDate';

type PropsType = {
  postdate: string;
  update: string | null;
};

const PostDate = ({ postdate, update }: PropsType) => {
  return (
    <section className="flex flex-wrap items-center gap-2 text-sm">
      <time dateTime={postdate} itemProp="datepublished">
        <DateDisplay {...getYMDObject(postdate)} />
      </time>
      {update && (
        <>
          <FaCaretRight size="20" className="text-accent" />
          <time dateTime={update} itemProp="dateupdated">
            <DateDisplay {...getYMDObject(update)} />
          </time>
        </>
      )}
    </section>
  );
};

export default PostDate;
