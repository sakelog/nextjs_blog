import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const tagListStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'inline-flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
    },
    item: {
      margin: theme.spacing(0, 1),
      width: 'auto',
      padding: 0,
      '&:first-of-type': {
        marginLeft: 0,
      },
    },
  })
);
