import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const headerStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: '#ffffff',
      fontFamily: ['"Press Start 2P"', 'cursive'].join(','),
      cursor: 'pointer',
    },
    socialIcon: {
      '& > ul': {
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.spacing(2, 1),
        '& > li': {
          margin: theme.spacing(1),
        },
      },
      [theme.breakpoints.up('sm')]: {
        flexShrink: 0,
        flexGrow: 0,
      },
    },
    drawerList: {
      width: '80vw',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar': {
          height: '10px',
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '6px',
          border: 'none',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '6px',
          background: theme.palette.secondary.light,
        },
      },
    },
    pageList: {
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        '& > div': {
          width: '180px',
          fontSize: '1.4rem',
        },
      },
    },
  })
);
