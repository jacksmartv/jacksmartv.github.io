// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { remarkMermaid } from './src/lib/remark-mermaid.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://jacksmartv.github.io',
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    processor: unified({ remarkPlugins: [remarkMermaid] }),
  },

  integrations: [mdx(), sitemap()]
});