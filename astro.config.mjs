import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://devops-fullstack-portfolio.pages.dev',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  vite: {
    optimizeDeps: {
      include: ['lucide-astro'],
    },
    server: {
      warmup: {
        clientFiles: [
          './src/pages/index.astro',
          './src/layouts/Layout.astro',
          './src/components/Hero.astro',
          './src/components/ProjectCard.astro',
          './src/components/SkillsMatrix.astro',
          './src/components/ProductionStandards.astro',
          './src/components/Contact.astro',
        ],
      },
    },
    build: {
      cssCodeSplit: false,
    },
  },
});
