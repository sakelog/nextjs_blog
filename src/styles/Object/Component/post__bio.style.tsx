import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const bioStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    profileIcon: {
      background: '#ffffff',
      display: 'block',
      width: '100%',
      maxWidth: '200px',
      position: 'relative',
      overflow: 'hidden',
      margin: '0 auto',
    },
    author: {
      fontSize: '2.4rem',
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    socialIcon: {
      '& > ul': {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
        },
        '& > li': {
          margin: theme.spacing(1),
        },
      },
    },
  })
);
