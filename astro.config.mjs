// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true, // 👈 Fuerza a Vite a escuchar cambios manualmente
      },
    },
  },

  integrations: [icon()],
  site: 'https://romero102.github.io',
  base: 'portfolio'
});