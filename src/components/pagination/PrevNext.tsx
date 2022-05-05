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
  const prevLink = (
    <div className="p-prevnext__item">
      {prevPost && (
        <>
          <HiOutlineChevronLeft className="p-prevnext__icon" />
          <Link href={getPostPath(prevPost.fields.slug)}>
            <a>{prevPost.fields.title}</a>
          </Link>
        </>
      )}
    </div>
  );

  const nextLink = (
    <div className="p-prevnext__item p-prevnext__item--next">
      {nextPost && (
        <>
          <Link href={getPostPath(nextPost.fields.slug)}>
            <a>{nextPost.fields.title}</a>
          </Link>
          <HiOutlineChevronRight className="p-prevnext__icon" />
        </>
      )}
    </div>
  );
  return (
    <nav className="p-prevnext__root">
      {prevLink}
      {nextLink}
    </nav>
  );
};

export default PrevNext;
