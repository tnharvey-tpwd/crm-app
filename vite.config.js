import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: '/crm-app/',  // <--- REQUIRED FOR GITHUB PAGES
  server: {
    open: true
  }
});
