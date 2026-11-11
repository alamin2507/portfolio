import { defineConfig } from 'astro/config';

export default defineConfig({
  // The live address. Used for the canonical link and share-image URLs.
  site: 'https://sayem.me',
  // External CSS only, so the CSP in vercel.json can stay strict (no 'unsafe-inline').
  build: { inlineStylesheets: 'never' },
  vite: {
    build: {
      // Never turn small files (font subsets) into data: URLs; the CSP only allows same-origin fonts.
      assetsInlineLimit: 0,
      // The CSS minifier folds animation-timeline into the animation shorthand,
      // which Chrome rejects, so scroll-linked animations silently stop.
      // Unminified CSS is ~9 kB gzipped; the host compresses it anyway.
      cssMinify: false,
    },
  },
});
