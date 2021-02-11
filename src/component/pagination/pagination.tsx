import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';
import { ButtonGroup, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import styles from '@styles/component/_c-pagination--pagination.module.scss';
import { muiTheme } from '@lib/mui/theme';

const Pagination: React.FC<pagination.pagination.props> = (props) => {
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

  const prevLink = (
    <Button
      href={prevPath}
      startIcon={<MdChevronLeft />}
      disabled={isFirst && true}
    >
      前へ
    </Button>
  );
  const nextLink = (
    <Button
      href={nextPath}
      endIcon={<MdChevronRight />}
      disabled={isLast && true}
    >
      次へ
    </Button>
  );

  // 先頭ページ
  const firstLink = (
    <Button
      startIcon={<MdFirstPage />}
      href={firstPath}
      disabled={isFirst && true}
    >
      1
    </Button>
  );
  // 最終ページ
  const lastLink = (
    <Button href={lastPath} endIcon={<MdLastPage />} disabled={isLast && true}>
      {lastPage.toString()}
    </Button>
  );
  // 現在ページ
  const currentPagePart = <Button disabled>{currentPage}</Button>;
  return (
    <ThemeProvider theme={muiTheme}>
      <nav className={styles.root}>
        <ButtonGroup variant="contained">
          {firstLink}
          {prevLink}
          {currentPagePart}
          {nextLink}
          {lastLink}
        </ButtonGroup>
      </nav>
    </ThemeProvider>
  );
};

export default Pagination;
