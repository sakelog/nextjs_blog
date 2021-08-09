import Link from 'next/link';
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from 'react-icons/hi';

import style from '@styles/pagination.module.scss';

const Pagination = (props: pagination.pagination.props) => {
  const { currentPage, lastPage, pathBase } = props;
  const isFirst = currentPage === 1;
  const isLast = currentPage === lastPage;

  const firstPath = pathBase;
  const lastPath = pathBase + lastPage.toString();

  const prevPath = isFirst
    ? ''
    : currentPage - 1 === 1
    ? firstPath
    : pathBase + (currentPage - 1).toString();
  const nextPath = !isLast
    ? pathBase + (currentPage + 1).toString()
    : '';

  const TEXT_PREV = '前へ';
  const prevLink = isFirst ? (
    <span className={style.disabled}>
      <HiOutlineChevronLeft />
      {TEXT_PREV}
    </span>
  ) : (
    <Link href={prevPath}>
      <a className={style.paginationItem}>
        <HiOutlineChevronLeft />
        {TEXT_PREV}
      </a>
    </Link>
  );
  const TEXT_NEXT = '次へ';
  const nextLink = isLast ? (
    <span className={style.disabled}>
      {TEXT_NEXT}
      <HiOutlineChevronRight />
    </span>
  ) : (
    <Link href={nextPath}>
      <a className={style.paginationItem}>
        {TEXT_NEXT}
        <HiOutlineChevronRight />
      </a>
    </Link>
  );
  // 先頭ページ
  const TEXT_FIRST = '1';
  const firstLink = isFirst ? (
    <span className={style.disabled}>
      <HiOutlineChevronDoubleLeft />
      {TEXT_FIRST}
    </span>
  ) : (
    <Link href={firstPath}>
      <a className={style.paginationItem}>
        <HiOutlineChevronDoubleLeft />
        {TEXT_FIRST}
      </a>
    </Link>
  );

  // 最終ページ
  const textLast = lastPage.toString();
  const lastLink = isLast ? (
    <span className={style.disabled}>
      {textLast}
      <HiOutlineChevronDoubleRight />
    </span>
  ) : (
    <Link href={lastPath}>
      <a className={style.paginationItem}>
        {textLast}
        <HiOutlineChevronDoubleRight />
      </a>
    </Link>
  );

  // 現在ページ
  const currentPagePart = (
    <span className={style.current}>{currentPage}</span>
  );

  return (
    <nav className="my-4 flex justify-center items-center">
      <div className="inline-flex items-center mx-auto space-x-3">
        {firstLink}
        {prevLink}
        {currentPagePart}
        {nextLink}
        {lastLink}
      </div>
    </nav>
  );
};

export default Pagination;
/*
import { ButtonGroup, Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';

import { paginationStyles as useStyles } from '@styles/component/pagination--pagination.style';

const Pagination: React.FC<pagination.pagination.props> = (props) => {
  const styles = useStyles();
  const { currentPage, lastPage, pathBase } = props;
  const isFirst = currentPage === 1;
  const isLast = currentPage === lastPage;

  const firstPath = pathBase;
  const lastPath = pathBase + lastPage.toString();

  const prevPath = isFirst
    ? ''
    : currentPage - 1 === 1
    ? firstPath
    : pathBase + (currentPage - 1).toString();
  const nextPath = !isLast ? pathBase + (currentPage + 1).toString() : '';


  // 先頭ページ
  const firstLink = (
    <Button
      startIcon={<FirstPageIcon />}
      href={firstPath}
      disabled={isFirst && true}
    >
      1
    </Button>
  );
  // 最終ページ
  const lastLink = (
    <Button
      href={lastPath}
      endIcon={<LastPageIcon />}
      disabled={isLast && true}
    >
      {lastPage.toString()}
    </Button>
  );
  // 現在ページ
  const currentPagePart = <Button disabled>{currentPage}</Button>;
  return (
    <nav className={styles.root}>
      <ButtonGroup variant="contained">
        {firstLink}
        {prevLink}
        {currentPagePart}
        {nextLink}
        {lastLink}
      </ButtonGroup>
    </nav>
  );
};

export default Pagination;
*/
