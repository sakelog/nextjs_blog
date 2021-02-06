import React from 'react';
import { HighlightProps } from 'react-instantsearch-core';
import { connectHighlight } from 'react-instantsearch-dom';
import { Message } from './types';

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
  return (
    <>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <mark key={index}>{part.value}</mark>
        ) : (
          <span key={index}>{part.value}</span>
        )
      )}
    </>
  );
};

export default connectHighlight(HighlightHit);
