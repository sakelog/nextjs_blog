import { HiChevronRight } from 'react-icons/hi';

import { getFormatDate } from '@lib/util/getFormatDate';

type PropsType = {
  postdate: string;
  update: string | null;
};

const PostDate = ({ postdate, update }: PropsType) => {
  return (
    <section className="flex flex-wrap gap-2 text-sm">
      <time dateTime={postdate} itemProp="datepublished">
        {getFormatDate(postdate)}
      </time>
      {update && (
        <>
          <HiChevronRight size="16" />
          <time dateTime={update} itemProp="dateupdated">
            {getFormatDate(update)}
          </time>
        </>
      )}
    </section>
  );
};

export default PostDate;
