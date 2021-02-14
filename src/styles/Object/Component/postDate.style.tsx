import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const postDateStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: '1.4rem',
      color: theme.palette.grey.A200,
      margin: theme.spacing(0, 1),
    },
  })
);
