import * as React from 'react';
import { Helmet } from 'react-helmet';

import config from './config';

const GTM_ID = config.GTM_ID;

const GTMScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

function customHead(title: string, description: string, imageFLG: boolean) {
  const metaTitle = (title ? title + ' | ' : '') + config.title;
  const metaDescription = description || config.description;
  const ogpImage =
    imageFLG === true
      ? 'https://res.cloudinary.com/cl1sakelog/image/upload/l_text:Sawarabi%20Gothic_50_bold:' +
        title +
        ',co_rgb:fff,w_700,c_fit/v1581205307/sakelog_ogp.png'
      : config.url + '/ogp.png';
  const TwitterType = imageFLG === true ? 'summary_large_image' : 'summary';
  return (
    <Helmet
      htmlAttributes={{
        lang: 'ja',
      }}
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogpImage,
        },
        {
          name: `twitter:card`,
          content: TwitterType,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `viewport`,
          content: `minimum-scale=1, initial-scale=1, width=device-width`,
        },
        {
          name: 'theme-color',
          content: '#54917f',
        },
      ]}
      link={[
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://www.googletagmanager.com',
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
        },
      ]}
      defer={false}
    >
      <script async>{GTMScript}</script>
    </Helmet>
  );
}

export default customHead;
