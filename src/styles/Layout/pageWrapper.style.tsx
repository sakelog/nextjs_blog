import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const pageWrapperStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);
