import Link from 'next/link';
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';

import styles from '../../styles/Object/Component/_c-pagination--pagination.module.scss';

const Pagination = (props: pagination.pagination.props) => {
  const { currentPage, lastPage, pathBase } = props;
  const isFirst = currentPage === 1;
  const isLast = currentPage === lastPage;

  const firstPath = pathBase;
  const lastPath = pathBase + lastPage.toString();

  const prevPath =
    currentPage - 1 === 1 ? firstPath : pathBase + (currentPage - 1).toString();
  const nextPath = pathBase + (currentPage + 1).toString();

  const prevLink = (
    <span
      className={styles.paginationItem + (isFirst ? ' ' + styles.disable : '')}
    >
      <MdChevronLeft />
      <Link href={prevPath}>前へ</Link>
    </span>
  );
  const nextLink = (
    <span
      className={styles.paginationItem + (isLast ? ' ' + styles.disable : '')}
    >
      <Link href={nextPath}>次へ</Link>
      <MdChevronRight />
    </span>
  );

  // 先頭ページ
  const firstLink = (
    <span
      className={
        styles.paginationItem +
        ' ' +
        styles.firstLast +
        (isFirst ? ' ' + styles.disable : '')
      }
    >
      <MdFirstPage />
      <Link href={firstPath}>1</Link>
    </span>
  );
  // 最終ページ
  const lastLink = (
    <span
      className={
        styles.paginationItem +
        ' ' +
        styles.firstLast +
        (isLast ? ' ' + styles.disable : '')
      }
    >
      <Link href={lastPath}>{lastPage.toString()}</Link>
      <MdLastPage />
    </span>
  );
  // 現在ページ
  const currentPagePart = (
    <span className={styles.paginationItem + ' ' + styles.currentPage}>
      {currentPage}
    </span>
  );
  return (
    <nav className={styles.root}>
      {firstLink}
      <div className={styles.prevNextRoot}>
        {prevLink}
        {currentPagePart}
        {nextLink}
      </div>
      {lastLink}
    </nav>
  );
};

export default Pagination;
