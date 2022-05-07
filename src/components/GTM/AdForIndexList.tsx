import Script from 'next/script';

const AdForIndexList = () =>
  process.env.NODE_ENV === 'production' && (
    <>
      <Script
        async
        strategy="afterInteractive"
        id="AdForIndexList_main"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5013956882447566"
      />
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-5013956882447566"
        data-ad-slot="8005269879"
      />
    </>
  );

export default AdForIndexList;
