/*==========================================================
参考：https://github.com/Takumon/react-markdown-sync-toc
============================================================*/
import React from 'react';
import { throttle } from 'lodash';

import remark from 'remark';
import visit from 'unist-util-visit';
import mdastToString from 'mdast-util-to-string';
import GithubSlugger from 'github-slugger';
const githubSlugger = new GithubSlugger();

import TOC from '../components/postParts/TOC';

const OFFSET_ACTIVE_IMTE = 160;

interface IState {
  activeItemIds: any[];
  itemTopOffsets: any[];
}
class ScrollSyncToc extends React.Component<{ markdown: string }, IState> {
  toc: any;
  constructor(props, context) {
    super(props, context);

    this.toc = _getToc(this.props.markdown);

    this.state = {
      activeItemIds: [],
      itemTopOffsets: [],
    };

    this.calculateItemTopOffsets = this.calculateItemTopOffsets.bind(this);
    this.handleScroll = throttle(this.handleScroll.bind(this), 100);
  }

  componentDidMount() {
    this.calculateItemTopOffsets();

    window.addEventListener(`scroll`, this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll);
  }

  calculateItemTopOffsets() {
    this.setState({
      itemTopOffsets: _getElementTopOffsetsById(this.toc),
    });
  }

  handleScroll() {
    const { itemTopOffsets } = this.state;

    const item = itemTopOffsets.find((current, i) => {
      const next = itemTopOffsets[i + 1];

      return next
        ? window.scrollY + OFFSET_ACTIVE_IMTE >= current.offsetTop &&
            window.scrollY + OFFSET_ACTIVE_IMTE < next.offsetTop
        : window.scrollY + OFFSET_ACTIVE_IMTE >= current.offsetTop;
    });

    const activeItemIds = item
      ? item.parents
        ? [item.id, ...item.parents.map((i) => i.id)]
        : [item.id]
      : [];

    this.setState({ activeItemIds });
  }

  render() {
    const { activeItemIds } = this.state;
    return <TOC activeItemIds={activeItemIds} toc={this.toc} {...this.props} />;
  }
}

// マークダウン文字列から目次情報を取得する
function _getToc(rawMarkdownBody) {
  const headings = _extractToc(rawMarkdownBody);
  return headings;
}

// マークダウン文字列から目次情報を抽出する
function _extractToc(rawMarkdownBody) {
  githubSlugger.reset();

  const result = [];
  const ast = remark().parse(rawMarkdownBody);
  visit(ast, 'heading', (child) => {
    const value = child.children[0].value;
    const id = githubSlugger.slug(value || mdastToString(child));
    const depth = child.depth;
    result.push({
      value,
      id,
      depth,
    });
  });

  return result;
}
const _getElementTopOffsetsById = (ids) => {
  return ids
    .map(({ id }) => {
      const element = document.getElementById(id);
      return element
        ? {
            id,
            offsetTop: element.offsetTop,
          }
        : null;
    })
    .filter((item) => item);
};

export default ScrollSyncToc;
