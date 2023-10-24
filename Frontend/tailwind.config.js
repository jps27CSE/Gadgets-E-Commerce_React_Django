/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: "'Allerta Stencil', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: {},
  },
};
