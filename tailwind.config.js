/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-blue-1": "#0077b6",
        "brand-gray-1": "#d9d9d9",
        "brand-green-1": "#6a994e",
      },
    },
  },
  plugins: [],
};
