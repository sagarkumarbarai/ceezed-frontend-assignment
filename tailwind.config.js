// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",       // index.html को स्कैन करेगा
    "./src/**/*.html", // अगर आप About/Contact src में रखते हैं
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}