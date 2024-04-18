import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import paths from "vite-tsconfig-paths";

export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    port: 4000,
  },
  plugins: [
    svelte({ configFile: '../svelte.config.js' }),
    paths({ root: '../' })
  ],
});
