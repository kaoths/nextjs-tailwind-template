const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "0px",
      ...defaultTheme.screens,
      "2xl": "1536px",
      "3xl": "1920px",
    },
    container: {
      center: true,
    },
    colors: {},
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
      },
    },
  },
  plugins: [],
};
