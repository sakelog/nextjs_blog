import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import slug from 'rehype-slug';
import toc from '@jsdevtools/rehype-toc';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';

export const markdownToHtml = async (markdown: string) =>
  unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeExternalLinks)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(slug)
    .use(toc, { headings: ['h2', 'h3'] })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .processSync(markdown);
