module.exports = {
  darkMode: "class",
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      keyframes: true,
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cool: ["Cereal", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
