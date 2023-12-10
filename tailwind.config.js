/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: "#f5a04f",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
        serif: ["Cedarville Cursive", "serif"],
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
