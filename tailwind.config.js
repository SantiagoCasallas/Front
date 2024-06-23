/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        impact: ['Impact', 'sans']
      },

      height: {
        'h-90-h': '90%'
      }
    },
  },
  plugins: [],
}