module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mobile: { min: "350px", max: "840px" },
        tablet: { min: "640px", max: "1300px" },
      },
    },
  },
  plugins: [],
};
