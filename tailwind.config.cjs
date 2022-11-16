/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        darkGreen: '#1B8659',
        lightGreen: '#35BC83',
      },
    },
  },
  plugins: [],
};
