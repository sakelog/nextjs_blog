import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const searchHighlightStyles = makeStyles((theme: Theme) =>
  createStyles({
    span: {
      color: theme.palette.secondary.dark,
    },
    mark: {
      background: theme.palette.primary.main,
      color: '#ffffff',
      padding: theme.spacing(0, 1),
      margin: theme.spacing(1),
    },
  })
);
