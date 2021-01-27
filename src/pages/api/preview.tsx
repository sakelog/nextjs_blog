import { getPreviewPostBySlug } from '../../lib/contentful/exportContent';

export default async function preview(
  req: { query: { secret?: string; slug?: string } },
  res
) {
  const secret = req.query.secret && req.query.secret;
  const slug = req.query.slug && req.query.slug;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const post = await getPreviewPostBySlug(slug);

  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  res.setPreviewData({});
  res.redirect('/preview/' + post.fields.slug);
  res.end();
}
