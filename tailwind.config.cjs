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
      }
    },
  },
  plugins: [],
}