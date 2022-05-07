import { chromium } from 'playwright';

export async function onRequest(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;

  const ogpPagePath = `https://sake-log.website/og?title=${decodeURIComponent(
    params
  )}`;

  const browser = await chromium.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewportSize({
    width: 1200,
    height: 630,
  });
  await page.goto(ogpPagePath, {
    waitUntil: 'networkidle',
  });
  const buffer = await page.screenshot({ type: 'png' });
  await browser.close();

  return new Response(buffer);
}
