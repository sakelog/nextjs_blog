export const CheckContentfulSetup = () => {
  const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(
      [
        'envファイルに下記情報の設定が必要',
        'CONTENTFUL_SPACE_ID:ContentfulのSpaceID',
        'CONTENTFUL_ACCESS_TOKEN:ContentfulのDelivery Access Token',
      ].join('\n')
    );
  } else {
    return true;
  }
};

export const CheckContentfulSetupPreview = () => {
  const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
    process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    throw new Error(
      [
        'envファイルに下記情報の設定が必要',
        'CONTENTFUL_SPACE_ID:ContentfulのSpaceID',
        'CONTENTFUL_PREVIEW_ACCESS_TOKEN:ContentfulのPreview Access Token',
      ].join('\n')
    );
  } else {
    return true;
  }
};
