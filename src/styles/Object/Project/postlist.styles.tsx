import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const postlistStyles = makeStyles((theme: Theme) =>
  createStyles({
    post: {
      cursor: 'pointer',
      height: '100%',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      padding: theme.spacing(1),
    },
    subItem: {
      fontSize: '1.4rem',
    },
  })
);
