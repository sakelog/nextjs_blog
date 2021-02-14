import React from 'react';
import { HighlightProps } from 'react-instantsearch-core';
import { connectHighlight } from 'react-instantsearch-dom';

import { Message } from './types';
import { searchHighlightStyles as useStyles } from '@styles/component/search--highlight.style';

const HighlightHit: React.FC<HighlightProps<Message>> = ({
  hit,
  highlight,
  attribute,
}) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });
  const styles = useStyles();
  return (
    <>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <mark key={index} className={styles.mark}>
            {part.value}
          </mark>
        ) : (
          <span key={index} className={styles.span}>
            {part.value}
          </span>
        )
      )}
    </>
  );
};

export default connectHighlight(HighlightHit);
