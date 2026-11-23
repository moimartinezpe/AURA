// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITIO } from './src/config.ts';

// Dirección pública de la web: tu dominio si ya lo pusiste en src/config.ts;
// si no, la que asigna Netlify (URL) o Vercel (VERCEL_PROJECT_PRODUCTION_URL).
const site =
  SITIO.dominio ||
  process.env.URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // El CSS va dentro de cada página: carga más rápido en celular.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
