const AdForPostArticle = () =>
  process.env.NODE_ENV === 'production' && (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-5013956882447566"
      data-ad-slot="1836528915"
    />
  );

export default AdForPostArticle;
