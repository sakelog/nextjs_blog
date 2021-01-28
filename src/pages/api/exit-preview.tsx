import type { NextApiResponse } from 'next';

export default async function exit(
  _: unknown,
  res: NextApiResponse
): Promise<void> {
  res.clearPreviewData();
  res.redirect('/');
  res.end();
}
