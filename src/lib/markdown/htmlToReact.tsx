import React from 'react';

import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';

import RemarkParagraph from '@components/remark/Paragraph';
import RemarkLink from '@components/remark/Link';
import RemarkImage from '@components/remark/Image';
import RemarkTable from '@components/remark/Table';
import RemarkIframe from '@components/remark/Iframe';

export const htmlToReact = unified()
  .use(rehypeParse, { fragment: true })
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
