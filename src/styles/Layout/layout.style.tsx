import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const layoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      padding: theme.spacing(2),
      background: theme.palette.grey.A100,
    },
  })
);
