import { useState } from 'react';
import {
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  HatenaShareButton,
  HatenaIcon,
  PocketShareButton,
  PocketIcon,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { FiClipboard } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

import config from '../config';

import styles from '../../styles/Object/Component/_c-post__Share.module.scss';
import headingStyles from '../../styles/Object/Component/_c-heading.module.scss';

type propsType = {
  url: string;
  title?: string;
};

const Share: React.FC<propsType> = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const [copiedText, setCopiedText] = useState('');
  const handleChangeText = (text: string): void => {
    setCopiedText('コピー完了：' + text);
  };
  const theme = createMuiTheme({
    typography: {
      fontSize: 30,
    },
  });
  return (
    <section className={styles.root}>
      <h2 className={headingStyles.flexLeft}>記事を共有する</h2>
      <div className={styles.buttons}>
        <TwitterShareButton
          url={props.url}
          title={props.title}
          via={config.social.twitter}
        >
          <TwitterIcon round={true} />
        </TwitterShareButton>
        <LineShareButton url={props.url} title={props.title}>
          <LineIcon round={true} />
        </LineShareButton>
        <HatenaShareButton url={props.url} title={props.title}>
          <HatenaIcon round={true} />
        </HatenaShareButton>
        <PocketShareButton url={props.url} title={props.title}>
          <PocketIcon round={true} />
        </PocketShareButton>
        <div
          className={styles.copyButton}
          onClick={() => {
            handleClick(), handleChangeText(props.title + ' ' + props.url);
          }}
        >
          <CopyToClipboard text={props.title + ' ' + props.url}>
            <FiClipboard />
          </CopyToClipboard>
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={copiedText}
          action={
            <>
              <MdClose onClick={handleClose} />
            </>
          }
        />
      </ThemeProvider>
    </section>
  );
};

export default Share;
