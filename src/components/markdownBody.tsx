import type { ReactElement } from 'react';

import { markdownRenderer } from '@lib/markdownRenderer';

type PropsType = {
  markdown: string;
};

const renderMarkdownBody = (
  props: PropsType
): ReactElement => {
  const parsedMarkdown = markdownRenderer.processSync(
    props.markdown
  );

  const result: ReactElement | any = parsedMarkdown.result;
  return result;
};

export default renderMarkdownBody;
