/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: "#f5a04f",
      },
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
