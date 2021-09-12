import React, { ReactElement } from 'react';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
const rehypePrism = require('@mapbox/rehype-prism');
import rehypeRaw from 'rehype-raw';
import slug from 'rehype-slug';
import toc from '@jsdevtools/rehype-toc';
import rehypeReact from 'rehype-react';

import RemarkParagraph from '@components/remark/remarkParagraph';
import RemarkLink from '@components/remark/remarkLink';
import RemarkImage from '@components/remark/remarkImage';
import RemarkTable from '@components/remark/remarkTable';
import RemarkIframe from '@components/remark/remarkIframe';

const renderMarkdownBody = (props: {
  markdown: string;
}): ReactElement => {
  const parsedMarkdown = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(slug)
    .use(toc, { headings: ['h2', 'h3'] })
    .use(rehypePrism, [])
    .use(rehypeRaw)
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        p: RemarkParagraph,
        a: RemarkLink,
        img: RemarkImage,
        table: RemarkTable,
        iframe: RemarkIframe,
      },
    })
    .processSync(props.markdown);

  const result: ReactElement | any = parsedMarkdown.result;
  return result;
};

export default renderMarkdownBody;
