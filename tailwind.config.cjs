/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cgray': {
          DEFAULT: '#939393',
          '50': '#EFEFEF',
          '100': '#E5E5E5',
          '200': '#D0D0D0',
          '300': '#BCBCBC',
          '400': '#A7A7A7',
          '500': '#939393',
          '600': '#777777',
          '700': '#5B5B5B',
          '800': '#3F3F3F',
          '900': '#232323'
        },
        'cyellow': {
          DEFAULT: '#FFF13C',
          '50': '#FFFEF4',
          '100': '#FFFDDF',
          '200': '#FFFAB6',
          '300': '#FFF78E',
          '400': '#FFF465',
          '500': '#FFF13C',
          '600': '#FFED04',
          '700': '#CBBC00',
          '800': '#938800',
          '900': '#5B5400'
        },
        'black': '#0A0A0A',
        'white': '#f8f9fa',
        'background': '#e0e0e0',
      },
      spacing: {
        'navbar-h': '56px',
        'screen-navbar': 'calc(100vh - 56px)'
      },
      gridTemplateColumns: {
        '1fr1.5fr': '1fr 1.5fr'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
    }),
  ],
}