import Link from 'next/link';

import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

import { getPostPath } from '@lib/util/getPath';

type PropsType = {
  prevPost: Contentful.PostPrevNextItem | null;
  nextPost: Contentful.PostPrevNextItem | null;
};

const PrevNext = ({ prevPost, nextPost }: PropsType) => {
  const prevLink = (
    <div className="p-prevnext__item">
      {prevPost && (
        <>
          <HiOutlineChevronLeft className="p-prevnext__icon" />
          <Link href={getPostPath(prevPost.slug)}>
            <a className="truncate">{prevPost.title}</a>
          </Link>
        </>
      )}
    </div>
  );

  const nextLink = (
    <div className="p-prevnext__item p-prevnext__item--next">
      {nextPost && (
        <>
          <Link href={getPostPath(nextPost.slug)}>
            <a className="truncate">{nextPost.title}</a>
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
