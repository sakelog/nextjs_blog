import * as React from 'react';
import unified from 'unified';
//const vfile = require('to-vfile');
//const report = require('vfile-reporter');
import parse from 'rehype-parse';
import rehype2react from 'rehype-react';
//import html from 'rehype-stringify';

import MyImage from './remarkImage';

const renderAst = (htmlBody: string) => {
  let processedHtml;
  let processor = unified()
    .use(parse, { emitParseErrors: true, fragment: true })
    .use(rehype2react, {
      createElement: React.createElement,
      components: {
        img: (props: { src: string; alt: string; title: string }) =>
          MyImage(props),
      },
    });
  //.use(html);
  processedHtml = processor.processSync(htmlBody).result;

  return processedHtml;
};

export default renderAst;
