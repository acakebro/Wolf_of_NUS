/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#061121',
        'secondary': '#1199FA',
        'tprimary' : '#f4f4f4',
        'tsecondary': '#c3cace',
        'dark': '#191b1f',
        'light': '#212429'
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}
