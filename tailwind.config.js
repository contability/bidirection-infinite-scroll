/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        danger: '#e12343',
        primary: '#17a37f',
        white: '#FFF',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
