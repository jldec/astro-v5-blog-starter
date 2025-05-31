// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-v5-blog-starter.jldec.me/',

  build: {
    format: 'file',
  },

  trailingSlash: 'never',
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },
})
