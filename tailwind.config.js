/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.jsx"], //показує де шукатимуться класи для tailwind
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#050505",
      black2: "#0f0f0f",
      violet: "#b6c3ff",
      liteGreen: "#e3ffa8",
      liteGreen2: "#45ffbc",
      gray: "#b6b6b6",
      gray2: "#292928",
      pink: "#ffc4f7",
      yellow: "#fff3b7",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    // fontSize: {
    //   bodyText1: "14px",
    // },
  },
  plugins: [],
};

// --add-water-button-color: #e3ffa8;
