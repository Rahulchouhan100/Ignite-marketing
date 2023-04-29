/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      psm: { min: "0px", max: "319px" },

      sm: { min: "320px", max: "425px" },

      md: { min: "426px", max: "768px" },

      lg: { min: "769px", max: "992px" },

      xl: { min: "993px", max: "1024px" },

      "2xl": { min: "1025px", max: "1200px" },
    },
  },
  plugins: [],
};
