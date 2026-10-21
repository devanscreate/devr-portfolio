import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://devops-fullstack-portfolio.pages.dev',
  compressHTML: true,
  server: {
    host: true, // Listen on all network interfaces (IPv4 0.0.0.0 + IPv6) to eliminate Windows IPv4 timeout latency
    port: 4321,
  },
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
    ssr: {
      noExternal: ['lucide-astro'],
    },
    build: {
      cssCodeSplit: false,
    },
  },
});
