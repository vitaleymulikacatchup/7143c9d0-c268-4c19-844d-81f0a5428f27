/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'starbucks-green': '#00704A',
        'starbucks-light-green': '#1E3932',
        'starbucks-dark-green': '#0e4b33',
        'warm-gray': '#f7f7f7',
        'light-gray': '#f9f9f9'
      },
      fontFamily: {
        'sans': ['SoDo Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}