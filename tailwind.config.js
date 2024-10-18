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
      keyframes: {
        borderAni: {
          '0%': {
            opacity: 0.5,
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.7)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.1)',
            boxShadow: '0 0 0 8px #333333',
          },
          '100%': {
            opacity: 0.5,
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.7)',
          },
        },
      },
      animation: {
        borderAni: 'borderAni 2s linear infinite',
      },
    },
  },
  plugins: [],
};
