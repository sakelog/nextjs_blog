import React from 'react';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import slug from 'rehype-slug';
import toc from '@jsdevtools/rehype-toc';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeReact from 'rehype-react';

import RemarkParagraph from '@components/remark/remarkParagraph';
import RemarkLink from '@components/remark/remarkLink';
import RemarkImage from '@components/remark/remarkImage';
import RemarkTable from '@components/remark/remarkTable';
import RemarkIframe from '@components/remark/remarkIframe';

export const markdownRenderer = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeExternalLinks)
  .use(rehypeHighlight, { ignoreMissing: true })
  .use(slug)
  .use(toc, { headings: ['h2', 'h3'] })
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
  });
