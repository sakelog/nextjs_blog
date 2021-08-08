import {
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import config from '@components/config';

let defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: config.themeColor,
    },
    secondary: grey,
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
    htmlFontSize: 10,
    fontSize: 16,
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default { defaultTheme };
