import { ButtonGroup, Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';

//import styles from '@styles/component/_c-pagination--pagination.module.scss';
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

  const prevLink = (
    <Button
      href={prevPath}
      startIcon={<ChevronLeftIcon />}
      disabled={isFirst && true}
    >
      前へ
    </Button>
  );
  const nextLink = (
    <Button
      href={nextPath}
      endIcon={<ChevronRightIcon />}
      disabled={isLast && true}
    >
      次へ
    </Button>
  );

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
