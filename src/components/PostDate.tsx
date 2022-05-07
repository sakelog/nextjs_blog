import { HiChevronRight } from 'react-icons/hi';

import { getYMDObject } from '@lib/util/getFormatDate';

type PropsType = {
  postdate: string;
  update: string | null;
};

const DateDisplay = ({ yyyy, mm, dd }) => (
  <div className="bg-gray-600 p-2">
    <div className="text-white text-center mb-1">
      {yyyy}
    </div>
    <div className="p-2 bg-white rounded-sm flex items-center gap-1">
      <span className="text-xl">{mm}</span>
      <div className="bg-gray-500 w-2 h-px" />
      <span className="text-xl">{dd}</span>
    </div>
  </div>
);

const PostDate = ({ postdate, update }: PropsType) => {
  return (
    <section className="flex flex-wrap items-center gap-2 text-sm">
      <time dateTime={postdate} itemProp="datepublished">
        <DateDisplay {...getYMDObject(postdate)} />
      </time>
      {update && (
        <>
          <HiChevronRight size="16" />
          <time dateTime={update} itemProp="dateupdated">
            <DateDisplay {...getYMDObject(update)} />
          </time>
        </>
      )}
    </section>
  );
};

export default PostDate;
