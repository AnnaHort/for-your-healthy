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
      grey: "#b6b6b6",
      grey2: "#292928",
      pink: "#ffc4f7",
      yellow: "#fff3b7",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    fontSize: {
      medium24: ["24px", { fontWeight: "500" }],
      regular18: ["18px", { fontWeight: "400" }],
      buttonText1: ["14px", { fontWeight: "400", lineHeight: "1.4" }],
      buttonText2: ["16px", { fontWeight: "400", lineHeight: "1.38" }],
      bodyText1: ["14px", { fontWeight: "400", lineHeight: "1.4" }],
      headLineTextH1: ["30px", { fontWeight: "400", lineHeight: "1.2" }],
      headLineTextH2: ["22px", { fontWeight: "400", lineHeight: "1.45" }],
    },
  },
  plugins: [],
};

// --add-water-button-color: #e3ffa8;
