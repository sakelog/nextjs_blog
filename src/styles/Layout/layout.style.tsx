import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const layoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      padding: theme.spacing(2),
      background: theme.palette.grey.A100,
      flexGrow: 1,
    },
  })
);
