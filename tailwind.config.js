/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html, js}",
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'sans': ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui',],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}