import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const footerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#ffffff',
      background: theme.palette.grey.A700,
      margin: 0,
      fontSize: '1.2rem',
      textAlign: 'center',
      padding: theme.spacing(1),
      marginTop: 'auto',
    },
  })
);
