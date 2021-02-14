import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const postStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentWrapper: {
      position: 'relative',
    },
    sidebar: {
      height: 'auto',
      maxHeight: '100%',
      overflow: 'hidden',
      position: 'sticky',
      top: '100px',
    },
    subItem: {
      margin: theme.spacing(2, 0),
      padding: theme.spacing(1),
    },
    postInfo: {
      margin: theme.spacing(2),
      background: theme.palette.grey[200],
    },
  })
);
