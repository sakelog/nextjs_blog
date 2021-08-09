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
          'Roboto',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          'Meiryo',
          'sans-serif',
        ],
        logo: ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: (theme) => ({
        external: "url('/img/external-link.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
