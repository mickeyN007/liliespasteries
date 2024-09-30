/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  //darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    //'./node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      screens: {
        xr: "414px",
        se: "375px",
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Inika: ['Inika', 'sans-serif']
      },
      colors: {
        activeLink: '#158EDC',

        black: '#000000',
        blackB: '#222222',
        primary: '#0E5E90',
        secondary: '#B66A6A',
        primaryB: '#0C191E',
        white: '#FFFFFF',
        gray: '#F4F4F4',
        grayB: '#EFEFEF',
        grayC: '#E2E2E2',
      }
    },
  },
  plugins: [],
}