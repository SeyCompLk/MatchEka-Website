module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], //
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        gfold: "281px",
        xsm: "400px",
        lgs: "1023px",
        llg: "1250px",
      },
      fontSize: {
        xxs: ["0.5rem", "0.75rem"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
