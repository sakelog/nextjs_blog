import React from 'react';
import loadable from '@loadable/component';

import remark from 'remark';
import gfm from 'remark-gfm';
import slug from 'remark-slug';
//import remarkIframes from 'remark-iframes';
import remark2rehype from 'remark-rehype';
import raw from 'rehype-raw';
import rehype2react from 'rehype-react';

//import html from 'rehype-stringify';

import report from 'vfile-reporter';
import styleGuide from 'remark-preset-lint-markdown-style-guide';

import RemarkParagraph from './remark/remarkParagraph';
const RemarkSyntaxHighlight = loadable(
  () => import('./remark/remarkSyntaxHighlight')
);
const RemarkImage = loadable(() => import('./remark/remarkImage'));
import RemarkLink from './remark/remarkLink';
import RemarkTable from './remark/remarkTable';

const renderMarkdownBody = (markdown: string) => {
  if (process.env.NODE_ENV === 'development') {
    const markdownLint = remark().use(styleGuide).processSync(markdown);
    console.log(report(markdownLint));
  }

  const parsedMarkdown = remark()
    .use(gfm)
    .use(slug)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(rehype2react, {
      createElement: React.createElement,
      components: {
        p: RemarkParagraph,
        code: RemarkSyntaxHighlight,
        img: RemarkImage,
        a: RemarkLink,
        table: RemarkTable,
      },
    })
    .processSync(markdown).result;

  return parsedMarkdown;
};

export default renderMarkdownBody;
