// components
import Link from 'next/link';
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

type PropTypes = {
  prevPost: Content.Post | null;
  nextPost: Content.Post | null;
};

const PrevNextLink = ({
  prevPost,
  nextPost,
}: PropTypes) => (
  <div
    className="uk-grid-divider uk-child-width-1-2@m"
    data-uk-grid
  >
    <div className="uk-flex" style={{ gap: '0.4rem' }}>
      {prevPost && (
        <>
          <HiOutlineChevronLeft size={24} />
          <Link href={`/post/${prevPost.id}`}>
            <a className="uk-flex-1">{prevPost.title}</a>
          </Link>
        </>
      )}
    </div>
    <div className="uk-flex" style={{ gap: '0.4rem' }}>
      {nextPost && (
        <>
          <Link href={`/post/${nextPost.id}`}>
            <a className="uk-flex-1">{nextPost.title}</a>
          </Link>
          <HiOutlineChevronRight size={24} />
        </>
      )}
    </div>
  </div>
);

export default PrevNextLink;
