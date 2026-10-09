import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://devops-fullstack-portfolio.pages.dev',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
