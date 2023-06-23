/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      padding: "2.5rem",
      maxWidth: "1440px",
      center: true
    },
    extend: {
      colors: {
          "primary-color": "#A3CE63",
          "secondary-button-bg": "#17252A80",
          "light-grey": "#17252A80",
          "light-black": "#000000DE", 
          "chev-color": "#17252A"
      }
    },
  },
  plugins: [],
}

