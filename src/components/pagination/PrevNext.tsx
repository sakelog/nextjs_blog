import Link from 'next/link';

import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

import { getPostPath } from '@lib/util/getPath';

type PropsType = {
  prevPost: Contentful.post | null;
  nextPost: Contentful.post | null;
};

const PrevNext = (props: PropsType) => {
  const { prevPost, nextPost } = props;
  const prevLink = (
    <div className="p-1">
      {prevPost && (
        <Link href={getPostPath(prevPost.fields.slug)}>
          <a className="flex items-center space-x-2">
            <HiOutlineChevronLeft />
            {prevPost.fields.title}
          </a>
        </Link>
      )}
    </div>
  );
  const nextLink = (
    <div className="p-1">
      {nextPost && (
        <Link href={getPostPath(nextPost.fields.slug)}>
          <a className="flex items-center space-x-2 justify-end">
            {nextPost.fields.title}
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
