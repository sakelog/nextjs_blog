import Link from 'next/link';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { getRootPath } from '../../lib/getPath';

import styles from '../../styles/Object/Component/_c-pagination--prevNext.module.scss';

const PrevNext = (props: pagination.prevNext.props) => {
  const { prevPost, nextPost } = props;
  const prevLink = prevPost ? (
    <Link href={getRootPath(prevPost.fields.slug)}>
      <span className={styles.paginationItem + ' ' + styles.prev}>
        <span className={styles.paginationIcon}>
          <MdChevronLeft />
        </span>
        {prevPost.fields.title}
      </span>
    </Link>
  ) : (
    <span className={styles.paginationItem + ' ' + styles.disable}></span>
  );
  const nextLink = nextPost ? (
    <Link href={getRootPath(nextPost.fields.slug)}>
      <span className={styles.paginationItem + ' ' + styles.next}>
        {nextPost.fields.title}
        <span className={styles.paginationIcon}>
          <MdChevronRight />
        </span>
      </span>
    </Link>
  ) : (
    <span className={styles.paginationItem + ' ' + styles.disable}></span>
  );
  return (
    <nav className={styles.root}>
      {prevLink}
      {nextLink}
    </nav>
  );
};

export default PrevNext;
