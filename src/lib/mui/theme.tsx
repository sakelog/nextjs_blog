import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import config from '@component/config';

let defaultTheme = createMuiTheme({
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
    fontSize: 16,
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default { defaultTheme };
