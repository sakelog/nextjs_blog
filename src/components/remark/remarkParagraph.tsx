import React from 'react';

import customBlockStyles from '@styles/component/article__customBlock.module.scss';

type PropsType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const RemarkParagraph = (props: PropsType) => {
  const newChildren =
    props.children &&
    Array.isArray(props.children) &&
    props.children.map((child, i) => {
      return typeof child === 'string'
        ? child.match(/\*\*.*\*\*/)
          ? convertStrong(child)
          : child.match(/\[\[/)
          ? createCustomBlock(child, i)
          : child
        : child;
    });
  return (
    <div className={props.className ? props.className : ''}>
      {newChildren}
    </div>
  );
};

export default RemarkParagraph;

const convertStrong = (text: string) => {
  const targetText = text.match(/\*\*(.*)\*\*/);
  targetText &&
    React.createElement('strong', [targetText[1]]);
};

const createCustomBlock = (text: string, index: number) => {
  const customBlock = text.match(/\[\[(.*)\]\]\n(.*)/);
  const hasTitle =
    customBlock && customBlock[1].match(/\|/);
  const blockType = customBlock
    ? hasTitle
      ? customBlock[1].split(' | ')[0]
      : customBlock[1]
    : '';
  customBlock &&
    React.createElement(
      'div',
      {
        className: blockType
          ? customBlockStyles[blockType]
          : '',
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
        customBlock[2]
          .split('|')
          .map((item, splitIndex) => {
            return React.createElement(
              'p',
              {
                key:
                  'customBlock_children_' +
                  index +
                  '_' +
                  splitIndex,
              },
              [item]
            );
          }),
      ]
    );
};
