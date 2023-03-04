/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'light-gray': 'hsl(0, 0%, 90%)',
        'grayish-red': 'hsl(0, 5%, 81%)',
        'very-light-gray': 'hsl(0, 0%, 93%)',
        'dark-moderate-cyan': 'hsl(185, 42%, 37%)',
        'very-dark-cyan': 'hsl(185, 58%, 25%)',
        'dark-orange': 'hsl(25, 99%, 27)',
        'light-grayish-yellow': 'hsl(45, 7%, 89%)',
        'dark-grayish-orange': 'hsl(35, 11%, 61%)',
        'very-dark-grayish-yellow': 'hsl(50, 10%, 19)'
      }
    },
  },
  plugins: [],
}
