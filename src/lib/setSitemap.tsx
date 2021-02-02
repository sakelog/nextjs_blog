import fs from 'fs';
import { format, isValid } from 'date-fns';
import config from '@component/config';

export const setSiteMap = (fetchDate: Date, urlSet: sitemap.urlset): void => {
  let SitemapString: string;

  SitemapString = '<?xml version="1.0" encoding="UTF-8" ?>';
  SitemapString +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  SitemapString += setURL({
    url: config.url,
    fetchDate: fetchDate,
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
