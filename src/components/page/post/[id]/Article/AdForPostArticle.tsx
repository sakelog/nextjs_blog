const AdForPostArticle = () => {
  return (
    <div key="ad-for-post-article" className="uk-margin">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-adtest={
          process.env.NODE_ENV === 'production'
            ? 'off'
            : 'on'
        }
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-5013956882447566"
        data-ad-slot="1836528915"
      />
    </div>
  );
};

export default AdForPostArticle;
