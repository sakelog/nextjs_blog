import { createMuiTheme } from '@material-ui/core/styles';

import config from '@component/config';

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: config.themeColor,
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Hiragino Sans"',
      '"Hiragino Kaku Gothic ProN"',
      '"Yu Gothic"',
      'Meiryo',
      'sans-serif',
    ].join(','),
  },
});
