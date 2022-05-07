import React from 'react';

import customBlockStyles from 'styles/Object/Component/_c-customBlock.module.scss';

type PropsType = JSX.IntrinsicElements['p'];

// strongが変換されない問題対応
const convertStrong = (text: string) => {
  const targetText = text.match(/\*\*(.*)\*\*/);
  if (targetText) {
    React.createElement('strong', [targetText[1]]);
  }
};

// CustomBlockの作成
const createCustomBlock = (text: string, index: number) => {
  const customBlock = text.match(/\[\[(.*)\]\]\n(.*)/);
  const hasTitle =
    customBlock && customBlock[1].match(/\|/);
  const blockType = customBlock
    ? hasTitle
      ? customBlock[1].split(' | ')[0]
      : customBlock[1]
    : '';
  if (customBlock) {
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
  }
};

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
