/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],

      },
      colors:{
        primaryDark:"#111111",
        secondaryDark:"#191919",
        BgDark:"#040406",
        bgLight:"#FAFAFA",
        light:"#FEFAE0"
      },screens: {
        tablet: '500px',

      },
    },
  },
  plugins: [],
}