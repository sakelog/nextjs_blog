import * as React from 'react';
import unified from 'unified';
import parse from 'rehype-parse';
import rehype2react from 'rehype-react';

import MyImage from './remarkImage';
import MyTable from './remarkTable';

const renderAst = (htmlBody: string) => {
  let processedHtml;
  let processor = unified()
    .use(parse, { emitParseErrors: true, fragment: true })
    .use(rehype2react, {
      createElement: React.createElement,
      components: {
        img: (props: MyLib.remarkImage.props) => MyImage(props),
        table: (props) => MyTable(props),
      },
    });
  processedHtml = processor.processSync(htmlBody).result;

  return processedHtml;
};

export default renderAst;
