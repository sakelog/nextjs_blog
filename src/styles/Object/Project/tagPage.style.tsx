import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const tagsPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    item: {
      width: 'auto',
      margin: theme.spacing(2, 1),
      display: 'inline-block',
    },
  })
);
