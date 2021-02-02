/*==========================================================
参考：https://github.com/Takumon/react-markdown-sync-toc
============================================================*/
import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';

import remark from 'remark';
import visit from 'unist-util-visit';
import mdastToString from 'mdast-util-to-string';
import GithubSlugger from 'github-slugger';
const githubSlugger = new GithubSlugger();

import TOC from '@component/postParts/TOC';

const OFFSET_ACTIVE_IMTE = 160;
const MAX_DEPTH = 3;

const RenderTOC: React.FC<{ markdown: string }> = (props) => {
  const [activeItemIds, setActiveItemIds] = useState<render.toc.activeItemIds>(
    []
  );
  const [
    itemTopOffsets,
    setItemTopOffsets,
  ] = useState<render.toc.itemTopOffsets>([]);

  const toc = _getToc(props.markdown);

  useEffect(() => {
    calculateItemTopOffsets();
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [itemTopOffsets]);

  const calculateItemTopOffsets = () => {
    setItemTopOffsets(_getElementTopOffsetsById(toc));
  };

  const throttledHandleScroll = throttle(() => handleScroll(), 100);
  const handleScroll = () => {
    const item = itemTopOffsets.find((current, i) => {
      const next = itemTopOffsets[i + 1];

      return next
        ? current &&
            window.scrollY + OFFSET_ACTIVE_IMTE >= current.offsetTop &&
            window.scrollY + OFFSET_ACTIVE_IMTE < next.offsetTop
        : current && window.scrollY + OFFSET_ACTIVE_IMTE >= current.offsetTop;
    });
    const nowActiveItemIds = item ? [item.id] : null;

    setActiveItemIds(nowActiveItemIds);
  };

  return <TOC activeItemIds={activeItemIds} toc={toc} {...props} />;
};
export default RenderTOC;

// マークダウン文字列から目次情報を抽出する
const _getToc: render.toc.getToc = (rawMarkdownBody) => {
  githubSlugger.reset();

  const result: render.toc.iditem[] = [];
  const ast = remark().parse(rawMarkdownBody);
  visit<any>(ast, 'heading', (child) => {
    const value = child.children[0].value;
    const id = githubSlugger.slug(value || mdastToString(child));
    const depth = child.depth ? child.depth : 0;
    result.push({
      value,
      id,
      depth,
    });
  });

  return result;
};
const _getElementTopOffsetsById: render.toc.getElementTopOffsetsById = (
  ids
) => {
  return ids
    .map((item) => {
      const element = document.getElementById(item.id);
      return item.depth <= MAX_DEPTH && element
        ? {
            id: item.id,
            offsetTop: element.offsetTop,
          }
        : null;
    })
    .filter((item) => item);
};
