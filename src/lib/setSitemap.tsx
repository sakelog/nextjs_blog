import fs from 'fs';
import { format, isValid } from 'date-fns';
import globby from 'globby';
import config from '@component/config';
import { getURLSet } from '@lib/contentful/exportContent/urlSet';

export const setSiteMap = async (): Promise<void> => {
  const fetchDate = new Date();
  const fetchUrlSet = await getURLSet();
  const manualPages = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/**/[*.tsx',
    '!src/pages/api',
    '!src/pages/preview',
    '!src/pages/_*.tsx',
    '!src/pages/**/index.tsx',
  ]);
  const manualUrlSet: sitemap.urlset = manualPages.map((page) => {
    const regex = /(pages)|(src)|(.tsx)|(index)/gi;
    let route = page.replace(regex, '').slice(1);
    route = route.endsWith('/') ? route : route + '/';
    return {
      url: config.url.slice(0, -1) + route,
      fetchDate,
      priority: '0.4',
    };
  });

  const urlSet = fetchUrlSet.concat(manualUrlSet);

  let SitemapString: string;

  SitemapString = '<?xml version="1.0" encoding="UTF-8" ?>';
  SitemapString +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  SitemapString += setURL({
    url: config.url,
    fetchDate,
    priority: '0.4',
  });
  urlSet.map((item) => {
    SitemapString += setURL(item);
  });
  SitemapString += '</urlset>';

  fs.writeFile('public/sitemap.xml', SitemapString, 'utf8', () => {
    console.log('Sitemap.xml saved!');
  });
};

const setURL = (item: sitemap.url): string => {
  let urlString: string;
  urlString = '<url><loc>';
  urlString += item.url;
  urlString += '</loc>';
  urlString += '<lastmod>';
  urlString += formatYMD(item.fetchDate);
  urlString += 'T';
  urlString += formatHM(item.fetchDate);
  urlString += '</lastmod>';
  urlString += '<changefreq>monthly</changefreq>';
  urlString += '<priority>' + item.priority + '</priority>';
  urlString += '</url>';

  return urlString;
};

const formatYMD = (date: Date | string): string => {
  const FORMAT_STRING = 'yyyy-MM-dd';

  return typeof date === 'string'
    ? format(new Date(date), FORMAT_STRING)
    : isValid(date)
    ? format(date, FORMAT_STRING)
    : '0000-00-00';
};

const formatHM = (date: Date | string): string => {
  const FORMAT_STRING = 'hh:mmxxx';

  return typeof date === 'string'
    ? format(new Date(date), FORMAT_STRING)
    : isValid(date)
    ? format(date, FORMAT_STRING)
    : '00:00';
};
