const AdForPostSide = () =>
  process.env.NODE_ENV === 'production' && (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-5013956882447566"
      data-ad-slot="4298314372"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );

export default AdForPostSide;
