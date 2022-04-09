import React from 'react';

import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';

import RemarkParagraph from '@components/remark/remarkParagraph';
import RemarkLink from '@components/remark/remarkLink';
import RemarkImage from '@components/remark/remarkImage';
import RemarkTable from '@components/remark/remarkTable';
import RemarkIframe from '@components/remark/remarkIframe';

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
