import React from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import config from '../config';

import { FiClipboard } from 'react-icons/fi';

type propsType = {
  post: Post.post;
};

const ShareButton = (props: propsType) => {
  const COPY_TEXT = '記事のURLをコピー';
  const COPIED_TEXT = 'コピー完了！';

  const [copiedtext, setCopiedText] = useState<string>(COPY_TEXT);

  const handleChangeText = (): void => {
    setCopiedText(COPIED_TEXT);
    setTimeout(function () {
      setCopiedText(COPY_TEXT);
    }, 5000);
  };

  return (
    <div className="p-sharebutton">
      <p className="p-sharebutton__title">SHARE</p>
      <p className="p-sharebutton__icons">
        <CopyToClipboard
          text={props.post.title + ' ' + config.url + props.post.slug + '/'}
        >
          <span className="p-sharebutton__copyurl" onClick={handleChangeText}>
            {copiedtext}
            <FiClipboard />
          </span>
        </CopyToClipboard>
      </p>
    </div>
  );
};

export default ShareButton;
