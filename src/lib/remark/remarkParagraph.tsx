import React, { ReactNode } from 'react';

import customBlockStyles from '@styles/component/_c-article__customBlock.module.scss';

type propsType = {
  className?: string;
  children?: ReactNode[];
};

const RemarkParagraph: React.FC<propsType> = (props) => {
  const newChildren = props.children.map((child, i) => {
    return typeof child === 'string'
      ? child.match(/\*\*.*\*\*/)
        ? convertStrong(child)
        : child.match(/\[\[/)
        ? createCustomBlock(child, i)
        : child
      : child;
  });
  return (
    <div className={props.className ? props.className : ''}>{newChildren}</div>
  );
};

export default RemarkParagraph;

const convertStrong = (text: string) => {
  React.createElement('strong', [text.match(/\*\*(.*)\*\*/)[1]]);
};

const createCustomBlock = (text: string, index: number) => {
  const customBlock = text.match(/\[\[(.*)\]\]\n(.*)/);
  const hasTitle = customBlock[1].match(/\|/);
  const blockType = hasTitle
    ? customBlockStyles[customBlock[1].split(' | ')[0]]
    : customBlockStyles[customBlock[1]];
  React.createElement(
    'div',
    {
      className: blockType,
      key: 'customBlock_' + index,
    },
    [
      hasTitle &&
        React.createElement(
          'p',
          {
            key: 'customBLock_title' + index,
            className: customBlockStyles.blockTitle,
          },
          customBlock[1].split(' | ')[1]
        ),
      customBlock[2].split('|').map((item, splitIndex) => {
        return React.createElement(
          'p',
          { key: 'customBlock_children_' + index + '_' + splitIndex },
          [item]
        );
      }),
    ]
  );
};
