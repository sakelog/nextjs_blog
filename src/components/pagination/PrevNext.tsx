import Link from 'next/link';

import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

import { getPostPath } from '@lib/util/getPath';

type PropsType = {
  prevPost: Contentful.Post | null;
  nextPost: Contentful.Post | null;
};

const PrevNext = ({ prevPost, nextPost }: PropsType) => {
  const prevLink = prevPost && (
    <div className="p-prevnext__item">
      <HiOutlineChevronLeft className="p-prevnext__icon" />
      <Link href={getPostPath(prevPost.fields.slug)}>
        <a>{prevPost.fields.title}</a>
      </Link>
    </div>
  );
  const nextLink = nextPost && (
    <div className="p-prevnext__item p-prevnext__item--next">
      <Link href={getPostPath(nextPost.fields.slug)}>
        <a>{nextPost.fields.title}</a>
      </Link>
      <HiOutlineChevronRight className="p-prevnext__icon" />
    </div>
  );
  return (
    <nav>
      <div className="p-prevnext__root">
        {prevLink}
        {nextLink}
      </div>
    </nav>
  );
};

export default PrevNext;
