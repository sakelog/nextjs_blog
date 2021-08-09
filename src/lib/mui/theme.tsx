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
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default { defaultTheme };
