export default async function exit(req, res) {
  res.clearPreviewData();
  res.redirect('/');
  res.end();
}
