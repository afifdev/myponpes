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
      maxWidth: {
        "8xl": "100rem",
      },
      fontFamily: {
        cool: ["TTCommons", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
