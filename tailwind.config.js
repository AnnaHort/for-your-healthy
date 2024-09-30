/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./src/App.css",
    "./src/App.jsx",
    // "./src/index.css",
    // "./src/main.jsx",
  ], //показує де шукатимуться класи для tailwind
  theme: {
    extend: {},
  },
  plugins: [],
};
