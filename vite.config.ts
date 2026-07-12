import { defineConfig } from 'vite';

export default defineConfig({
  base: '/threesur/',
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 1500,
  },
});
