import * as contentful from 'contentful';

import {
  CheckContentfulSetup,
  CheckContentfulSetupPreview,
} from '../checkSetup';

export const client =
  CheckContentfulSetup &&
  contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

export const previewClient =
  CheckContentfulSetupPreview &&
  contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
  });
