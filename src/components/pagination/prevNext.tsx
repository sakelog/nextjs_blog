import Link from 'next/link';

import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

import { getRootPath } from '@lib/getPath';

const PrevNext: React.FC<pagination.prevNext.props> = (
  props
) => {
  const { prevPost, nextPost } = props;
  const prevLink = (
    <div className="p-1">
      {prevPost && (
        <Link href={getRootPath(prevPost.slug)}>
          <a className="flex items-center space-x-2">
            <HiOutlineChevronLeft />
            {prevPost.title}
          </a>
        </Link>
      )}
    </div>
  );
  const nextLink = (
    <div className="p-1">
      {nextPost && (
        <Link href={getRootPath(nextPost.slug)}>
          <a className="flex items-center space-x-2 justify-end">
            {nextPost.title}
            <HiOutlineChevronRight />
          </a>
        </Link>
      )}
    </div>
  );
  return (
    <nav>
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x-2 md:divide-gray-200 text-sm my-2">
        {prevLink}
        {nextLink}
      </div>
    </nav>
  );
};

export default PrevNext;
