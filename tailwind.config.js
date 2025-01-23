const { lightBlue } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      lightGrey:"#D4D8DD",
      red: "#FF0000",
      lightBlue:"#2D6CDF",
      durkBlue: "#1D3557",
      white: "#ffffff",
      orangeHover:"#FF6A00",
      myColors: {
        100: "#1D3557",
      },
      myColorsGrey: {
        100: " #6C757D",
        700: "#212529",
      },
      // ...
    },
    fontFamily: {
      nunito: ["Nunito Sans", "serif"],
    },
  },
  plugins: [],
};
