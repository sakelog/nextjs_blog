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
  const prevLink = prevPost ? (
    <div>
      <Link href={getRootPath(prevPost.slug)}>
        <a
          className="flex items-center space-x-1 
                     border border-gray-400 rounded p-2 hover:bg-gray-200"
        >
          <HiOutlineChevronLeft />
          {prevPost.title}
        </a>
      </Link>
    </div>
  ) : (
    <div>{''}</div>
  );
  const nextLink = nextPost ? (
    <div>
      <Link href={getRootPath(nextPost.slug)}>
        <a
          className="flex items-center space-x-1 
                     border border-gray-400 rounded p-2 hover:bg-gray-200
                     justify-end"
        >
          {nextPost.title}
          <HiOutlineChevronRight />
        </a>
      </Link>
    </div>
  ) : (
    <div>{''}</div>
  );
  return (
    <nav style={{ margin: '2rem auto' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        {prevLink}
        {nextLink}
      </div>
    </nav>
  );
};

export default PrevNext;
