/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
    },
    screens: {
      "Mobile": { "min": "320px", "max": "599px" },
      "Tablet": { "min": "600px", "max": "900px" },
      "default": { "min": "768px", "max": "1024px" },
      "Desktop": { "min": "1024px", "max": "1200px" },
      "large": "1440px",
    },
    colors: {
      "blue": "#006bb9",
      "light-blue": "#30a0e0",
      "yellow": "#ffc973",
      "light-yellow": "#ffe3b3",
      "white": "#ffffff",
      "black": "#000000",
      "light-gray": "hsla(156, 44%, 0%, 0.6)",
      "dark-blue": "#001429",
    },
    fontWeight: {
      mi: 200,
      md: 400,
      ms: 300,
      lg: 500,
      xl: 700,
    },
    fontSize: {
      ms: "16px",
    }

  },
  plugins: [],
}
