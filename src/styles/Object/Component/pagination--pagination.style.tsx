import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const paginationStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      margin: '2rem auto',
    },
  })
);
