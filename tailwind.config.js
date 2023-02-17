/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        raleway: "Raleway, sans-serif",
      },
      colors: {
        app: {
          black: {
            500: "#4B4B4B",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
