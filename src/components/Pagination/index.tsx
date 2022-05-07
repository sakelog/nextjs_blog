import Link from 'next/link';
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from 'react-icons/hi';

const Pagination = (props: Pagination.Pagination.Props) => {
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
  const PrevLink = () =>
    isFirst ? (
      <span className="p-pagination__item--disable">
        <HiOutlineChevronLeft />
        {TEXT_PREV}
      </span>
    ) : (
      <Link href={prevPath}>
        <a className="p-pagination__item--able">
          <HiOutlineChevronLeft />
          {TEXT_PREV}
        </a>
      </Link>
    );
  const TEXT_NEXT = '次へ';
  const NextLink = () =>
    isLast ? (
      <span className="p-pagination__item--disable">
        {TEXT_NEXT}
        <HiOutlineChevronRight />
      </span>
    ) : (
      <Link href={nextPath}>
        <a className="p-pagination__item--able">
          {TEXT_NEXT}
          <HiOutlineChevronRight />
        </a>
      </Link>
    );
  // 先頭ページ
  const TEXT_FIRST = '1';
  const FirstLink = () =>
    isFirst ? (
      <span className="p-pagination__item--disable">
        <HiOutlineChevronDoubleLeft />
        {TEXT_FIRST}
      </span>
    ) : (
      <Link href={firstPath}>
        <a className="p-pagination__item--able">
          <HiOutlineChevronDoubleLeft />
          {TEXT_FIRST}
        </a>
      </Link>
    );

  // 最終ページ
  const textLast = lastPage.toString();
  const LastLink = () =>
    isLast ? (
      <span className="p-pagination__item--disable">
        {textLast}
        <HiOutlineChevronDoubleRight />
      </span>
    ) : (
      <Link href={lastPath}>
        <a className="p-pagination__item--able">
          {textLast}
          <HiOutlineChevronDoubleRight />
        </a>
      </Link>
    );

  // 現在ページ
  const CurrentPageComponent = () => (
    <span className="p-pagination__item--current">
      {currentPage}
    </span>
  );

  return (
    <nav className="p-pagination__root">
      <FirstLink />
      <PrevLink />
      <CurrentPageComponent />
      <NextLink />
      <LastLink />
    </nav>
  );
};

export default Pagination;
