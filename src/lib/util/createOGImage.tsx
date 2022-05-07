import { join } from 'path';
import fs from 'fs';
import { chromium } from 'playwright';

// config
import siteMeta from 'components/config';

export const createOGImage = async (
  title: string,
  filename: string
) => {
  if (process.env.NODE_ENV === 'production') {
    const basePagePath = `${siteMeta.url}og`;
    const ogPagePath = title
      ? `${basePagePath}?title=${encodeURIComponent(title)}`
      : basePagePath;

    const localOgImageDir = join(
      process.cwd(),
      'public',
      'img',
      'og'
    );
    const ogImageFileName = `${encodeURIComponent(
      filename
    )}.png`;

    const localPath = join(
      localOgImageDir,
      ogImageFileName
    );
    const publicPath = `${siteMeta.url}img/og/${ogImageFileName}`;

    try {
      fs.statSync(localPath);
      return publicPath;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(`og image create for : ${title}`);
    }

    const browser = await chromium.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.setViewportSize({
      width: 1200,
      height: 630,
    });
    await page.goto(ogPagePath, {
      waitUntil: 'load',
      timeout: 50000,
    });
    const buffer = await page.screenshot({ type: 'png' });
    await browser.close();

    fs.mkdirSync(localOgImageDir, { recursive: true });
    fs.writeFileSync(localPath, buffer);

    return publicPath;
  }

  return '';
};

export default createOGImage;
