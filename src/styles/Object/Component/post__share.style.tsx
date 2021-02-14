import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const shareStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    buttons: {
      padding: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(0, 1),
      },
    },
    copyButton: {
      width: '64px',
      height: '64px',
      flexGrow: 0,
      flexShrink: 0,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.palette.grey.A700,
      color: '#ffffff',
      borderRadius: '100%',
      cursor: 'pointer',
    },
    copyButtonIcon: {
      fontSize: '32px',
    },
  })
);
