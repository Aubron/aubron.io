import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        scoreshots: '#6b2587',
        indeed: '#003A9B',
        google: '#3367d6',
        bandwidth: 'rgb(7, 156, 238)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
