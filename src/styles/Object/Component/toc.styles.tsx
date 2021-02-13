import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const TOCStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: theme.spacing(1),
      '&::-webkit-scrollbar': {
        width: '4px',
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
    list: {
      color: theme.palette.secondary.main,
    },
    active: {
      background: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
    },
  })
);
