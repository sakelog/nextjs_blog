import Script from 'next/script';

console.log(process.env.NODE_ENV);

const AdForIndexList = () =>
  process.env.NODE_ENV === 'production' && (
    <>
      <Script
        strategy="lazyOnload"
        id="AdForIndexList_main"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5013956882447566"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-5013956882447566"
        data-ad-slot="8005269879"
      ></ins>
      <Script strategy="lazyOnload" id="AdForIndexList_sub">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
    </>
  );

export default AdForIndexList;
