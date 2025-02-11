/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-light': '#f56f03',
        'orange-dark': '#ff3000',
        'op-dark': 'rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};
