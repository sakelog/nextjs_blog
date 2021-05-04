import * as contentful from 'contentful';

import {
  CheckContentfulSetup,
  CheckContentfulSetupPreview,
} from '../checkSetup';

export const client =
  CheckContentfulSetup() === true
    ? contentful.createClient({
        space:
          typeof process.env.CONTENTFUL_SPACE_ID === 'string'
            ? process.env.CONTENTFUL_SPACE_ID
            : '',
        accessToken:
          typeof process.env.CONTENTFUL_ACCESS_TOKEN === 'string'
            ? process.env.CONTENTFUL_ACCESS_TOKEN
            : '',
      })
    : null;

export const previewClient =
  CheckContentfulSetupPreview() === true
    ? contentful.createClient({
        space:
          typeof process.env.CONTENTFUL_SPACE_ID === 'string'
            ? process.env.CONTENTFUL_SPACE_ID
            : '',
        accessToken:
          typeof process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN === 'string'
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : '',
        host: 'preview.contentful.com',
      })
    : null;
