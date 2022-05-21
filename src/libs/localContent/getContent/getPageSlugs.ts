import fs from 'fs';

import { pageDirectory } from './type';

export const getPageSlugs = () => {
  return fs.readdirSync(pageDirectory);
};
