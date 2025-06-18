// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    remotePatterns: [{ protocol: "https" }],
  },
  
  // Build optimization
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Vite optimization
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            'gallery': ['./src/pages/products/[slug].astro'],
          }
        }
      }
    },
    ssr: {
      noExternal: ['@astrojs/vercel']
    }
  }
});
