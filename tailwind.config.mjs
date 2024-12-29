/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ['ul > li']: {
              margin: '0.2ch 0',
              paddingInlineStart: '0.25ch'
            },
            img: {
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: theme('borderRadius.md'),
              margin: '0 auto',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
