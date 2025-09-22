import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sanset: ['Open Sans', 'ui-sans-serif', 'system-ui'],
        code: ['"Source Code Pro ExtraLight"', 'monospace'],
        fa: ['"Font Awesome 6 Free"'],
      },
    },
  },
} satisfies Config;
