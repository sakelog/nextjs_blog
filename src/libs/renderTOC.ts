import * as cheerio from 'cheerio';

export const renderTOC = (body: string) => {
  const $ = cheerio.load(body);
  const headings = $('h2, h3').toArray();
  const toc = headings.map((data) => ({
    text: (data.children[0] as unknown as Text).data,
    id: data.attribs.id,
    name: data.name,
  }));

  return toc;
};
