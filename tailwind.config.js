/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "matte-white": "#FAFAFA",

        dark: {
          950: "#0e1012",
          900: "#000000",
          980: "#0e1012",
          800: "#1E1B24",
          700: "#23202A",
          600: "#333139",
          500: "#4f4d55",
          400: "#999cb4",
          300: "#C2C6DD",
          200: "#d3d2d4",
          100: "#e9e9ea",
        },
      },
      width: {
        18: "4.5rem",
      },
      height: {
        18: "4.5rem",
      },
      inset: {
        "-25": "-6.25rem",
      },
      padding: {
        18: "4.5rem",
        "11/12": "91.666667%",
        "3/2": "150%",
      },
      transitionDuration: {
        250: "250ms",
      },
      borderRadius: {
        20: "20px",
      },
      boxShadow: {
        "inner-clay":
          "0px 1px 3px 0px rgba(255, 255, 255, 0.22) inset, -2px -4px 21px 0px rgba(255, 255, 255, 0.00) inset",
        "inner-clayWhite":
          "0px 1px 3px 0px rgba(0, 0, 0, 0.5) inset, -2px -4px 21px 0px rgba(0, 0, 0, 0.0) inset",
        "hover-clay":
          "-20px -20px 25px 0px rgba(255, 255, 255, 0.08), 20px 20px 25px 0px rgba(0, 0, 0, 0.3)",
        custom: "0px 10px 20px 0px rgba(0, 0, 0, 0.50)",
      },
      backgroundImage: (theme) => ({
        "gradient-custom":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.60) 100%)",
      }),
    },
  },

  plugins: [require("@tailwindcss/aspect-ratio")],
};
