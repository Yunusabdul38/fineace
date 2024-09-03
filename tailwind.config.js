/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        orangePrimary:"#FF450D",
      },
      colors:{
        orangeText:"#FF450D"
      },
      fontFamily:{
        "LexendDeca":"'Lexend Deca', 'sans-serif'",
        Urbanist:"'Urbanist', 'sans-serif'",
      }
    },
  },
  plugins: [],
}