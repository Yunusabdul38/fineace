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
      backgroundImage:{
        coin:"url('./src/assets/coins.jpg')",
        money:"url('./src/assets/money.jpg')",
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