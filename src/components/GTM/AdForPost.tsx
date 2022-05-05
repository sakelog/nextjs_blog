import Script from 'next/script';

const AdForPost = () =>
  process.env.NODE_ENV === 'production' && (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5013956882447566"
        crossOrigin="anonymous"
        id="AdForPost_main"
        onLoad={() => (
          <Script id="AdForPost_sub">
            (adsbygoogle = window.adsbygoogle || []).push({}
            );
          </Script>
        )}
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-5013956882447566"
        data-ad-slot="1836528915"
      ></ins>
    </>
  );

export default AdForPost;
