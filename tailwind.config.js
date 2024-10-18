/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#D74344',
        green: '#219653',
        grey: '#333333',
        blue: '#2F80ED',
        orange: '#F2994A',
        purple: '#9B51E0',
        yellow: '#F2C94C',
        lightRed: '#EB5757',
      },
    },
  },
  plugins: [],
};
