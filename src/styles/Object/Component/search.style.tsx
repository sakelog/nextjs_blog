import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';

export const searchStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: '30%',
      margin: theme.spacing(0, 1),
    },
    search: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1),
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
    searchIcon: {
      margin: theme.spacing(0, 2),
      fontSize: '2rem',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      transition: theme.transitions.create('width'),
      width: '100%',
    },
    hits: {
      position: 'fixed',
      background: '#ffffff',
      zIndex: 999,
      left: 0,
      width: '100%',
      padding: theme.spacing(2),
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)',
    },
    hit: {
      borderBottom: '1px dashed #000000',
    },
    clearWrapper: {
      textAlign: 'right',
    },
    clear: {
      background: theme.palette.primary.main,
      color: '#ffffff',
      fontWeight: 'bold',
      padding: theme.spacing(1),
      cursor: 'pointer',
    },
  })
);
