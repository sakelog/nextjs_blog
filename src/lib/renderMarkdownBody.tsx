import React, { ReactElement } from 'react';

import remark from 'remark';
import gfm from 'remark-gfm';
import slug from 'remark-slug';
import remark2rehype from 'remark-rehype';
import raw from 'rehype-raw';
import rehype2react from 'rehype-react';
//import html from 'rehype-stringify';
//const report = require('vfile-reporter');
//const styleGuide = require('remark-preset-lint-markdown-style-guide');

import RemarkParagraph from '@lib/remark/remarkParagraph';
import RemarkSyntaxHighlight from '@lib/remark/remarkSyntaxHighlight';
import RemarkImage from '@lib/remark/remarkImage';
import RemarkLink from '@lib/remark/remarkLink';
import RemarkTable from '@lib/remark/remarkTable';
import RemarkIframe from '@lib/remark/remarkIframe';

const renderMarkdownBody = (props: { markdown: string }): ReactElement => {
  /*
  if (process.env.NODE_ENV === 'development') {
    const markdownLint = remark().use(styleGuide).processSync(props.markdown);
    console.log(report(markdownLint));
  }
  */

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
        iframe: RemarkIframe,
      },
    })
    .processSync(props.markdown);

  const result: ReactElement | any = parsedMarkdown.result;
  return result;
};

export default renderMarkdownBody;
