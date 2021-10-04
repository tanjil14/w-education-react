module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      myBox: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
    },
    extend: {
      boxShadow: ["active"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
