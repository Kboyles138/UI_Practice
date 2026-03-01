// tailwind.config.js
const designColors = require("./src/styles/colors.js");

module.exports = {
  darkMode: "class", // supports dark mode via 'dark' class
  theme: {
    extend: {
      colors: designColors,
    },
  },

  plugins: [],
};
