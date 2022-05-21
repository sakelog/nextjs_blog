import * as cheerio from 'cheerio';
import hljs from 'highlight.js';

export const convertHTML = (content: string) => {
  const $ = cheerio.load(content);
  $('pre code').each((_, elm) => {
    const highlightResult = hljs.highlightAuto(
      $(elm).text()
    );
    $(elm).html(highlightResult.value);
    $(elm).addClass('hljs');
  });

  // iframeのアスペクト比設定
  $('iframe').each((_, elm) => {
    const elmWidth = Number($(elm).attr('width')) || 0;
    const elmHeight = Number($(elm).attr('height')) || 0;

    const elmAspect = (elmHeight / elmWidth) * 100;
    $(elm).wrap(
      `<div class="uk-cover-container" style="padding-top : ${elmAspect}%"></div>`
    );
    $(elm).attr('data-uk-cover', '');
  });

  return $(`body`).html();
};
