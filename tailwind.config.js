const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        theme: {
          DEFAULT: '#d9a62e',
          dark: '#997520',
        },
      },
      fontFamily: {
        sans: [
          'Lato',
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
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
  plugins: [require('@tailwindcss/forms')],
};
