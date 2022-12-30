/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ownBlue: "#2F80ED",
        ownGrey: "#333333",
        white: "#FFF",
      },
    },
  },
  plugins: [],
};
