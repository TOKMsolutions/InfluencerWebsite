/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hv: ['HelveticaNeueBold', 'Helvetica'],
      },
      screens: {
        'max-2xl': {'max': '1535px'},
        'max-xl': {'max': '1279px'},
        'max-lg': {'max': '1023px'},
        'max-md': {'max': '767px'},
        'max-sm': {'max': '639px'},
      },
      truncate: {
        lines: {
            3: '3',
            5: '5',
            8: '8',
        }
      }
    },
  },
  plugins: [require('tailwindcss-truncate-multiline')(),],
}