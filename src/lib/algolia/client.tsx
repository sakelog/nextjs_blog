import algoliasearch from 'algoliasearch/lite';

const indexName = 'post';

const searchClient =
  process.env.NEXT_PUBLIC_ALGOLIA_APPID &&
  process.env.NEXT_PUBLIC_ALGOLIA_APIKEY
    ? algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APPID,
        process.env.NEXT_PUBLIC_ALGOLIA_APIKEY
      )
    : '';

export { indexName, searchClient };
