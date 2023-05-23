/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         pangolin: "'Pangolin', serif",
         gochiHand: "'Gochi Hand', serif",
    },
  },
  plugins: [],
}
}
