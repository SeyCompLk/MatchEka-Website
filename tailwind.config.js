module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], //
  darkMode: false, // or 'media' or 'class'
  theme: {
    Screen: {
      xsm: "320px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
