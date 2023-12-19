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
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
      animation: {
        updown: "updown 3s linear infinite",
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
