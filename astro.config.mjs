import { defineConfig } from 'astro/config';

export default defineConfig({
  // The live address. Used for the canonical link and share-image URLs.
  site: 'https://sayem.me',
  // External CSS only, so the CSP in vercel.json can stay strict (no 'unsafe-inline').
  build: { inlineStylesheets: 'never' },
  // Never turn small files (font subsets) into data: URLs; the CSP only allows same-origin fonts.
  vite: { build: { assetsInlineLimit: 0 } },
});
