const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/template/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        theme: {
          DEFAULT: '#5b7e91',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          '"ヒラギノ角ゴ ProN W3"',
          'Arial',
          'メイリオ',
          'Meiryo',
          'sans-serif',
        ],
        logo: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
