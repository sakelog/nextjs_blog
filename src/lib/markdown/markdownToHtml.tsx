import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import slug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';

export const markdownToHtml = async (markdown: string) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeExternalLinks)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(slug)
    .use(rehypeRaw)
    .use(rehypeStringify);

  const result = processor.processSync(markdown);

  return result?.toString() || null;
};

export default markdownToHtml;
