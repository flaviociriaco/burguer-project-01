/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Poppins", "serif"],
      mono: ["Poppins", "monospace"],
    },
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
