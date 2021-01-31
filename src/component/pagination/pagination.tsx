import Link from 'next/link';
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';

import styles from '@styles/component/_c-pagination--pagination.module.scss';

const Pagination: React.FC<pagination.pagination.props> = (props) => {
  const { currentPage, lastPage, pathBase } = props;
  const isFirst = currentPage === 1;
  const isLast = currentPage === lastPage;

  const firstPath = pathBase;
  const lastPath = pathBase + lastPage.toString();

  const prevPath =
    !isFirst && currentPage - 1 === 1
      ? firstPath
      : pathBase + (currentPage - 1).toString();
  const nextPath = !isLast && pathBase + (currentPage + 1).toString();

  const prevLink = (
    <span className={styles.paginationItem}>
      <MdChevronLeft className={isFirst && styles.disable} />
      {isFirst ? (
        <span className={styles.disable}>前へ</span>
      ) : (
        <Link href={prevPath}>前へ</Link>
      )}
    </span>
  );
  const nextLink = (
    <span className={styles.paginationItem}>
      {isLast ? (
        <span className={styles.disable}>次へ</span>
      ) : (
        <Link href={nextPath}>次へ</Link>
      )}
      <MdChevronRight className={isLast && styles.disable} />
    </span>
  );

  // 先頭ページ
  const firstLink = (
    <span className={styles.paginationItem + ' ' + styles.first}>
      <MdFirstPage className={isFirst && styles.disable} />
      {isFirst ? (
        <span className={styles.disable}>1</span>
      ) : (
        <Link href={firstPath}>1</Link>
      )}
    </span>
  );
  // 最終ページ
  const lastLink = (
    <span className={styles.paginationItem + ' ' + styles.last}>
      {isLast ? (
        <span className={styles.disable}>{lastPage.toString()}</span>
      ) : (
        <Link href={lastPath}>{lastPage.toString()}</Link>
      )}
      <MdLastPage className={isLast && styles.disable} />
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
