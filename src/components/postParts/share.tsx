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
import { Snackbar, IconButton } from '@material-ui/core';
import {
  HiOutlineClipboardList,
  HiOutlineXCircle,
} from 'react-icons/hi';

import config from '@components/config';

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
  return (
    <section className="my-2 flex items-center space-x-4">
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
      <HatenaShareButton
        url={props.url}
        title={props.title}
      >
        <HatenaIcon round={true} />
      </HatenaShareButton>
      <PocketShareButton
        url={props.url}
        title={props.title}
      >
        <PocketIcon round={true} />
      </PocketShareButton>
      <div
        id="copyButton"
        className="h-16 w-16 flex items-center justify-center bg-gray-600 text-white
          rounded-full"
        onClick={() => {
          handleClick(),
            handleChangeText(props.title + ' ' + props.url);
        }}
      >
        <CopyToClipboard
          text={props.title + ' ' + props.url}
        >
          <span className="text-3xl">
            <HiOutlineClipboardList />
          </span>
        </CopyToClipboard>
      </div>
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
          <IconButton color="inherit" onClick={handleClose}>
            <HiOutlineXCircle />
          </IconButton>
        }
      />
    </section>
  );
};

export default Share;
