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
        "primary-bg": "#F2F2F2",
        "secondary-button-bg": "#17252A80",
        "light-grey": "#17252A80",
        "light-black": "#000000DE",
        "chev-color": "#17252A",
        "secondary-text-color": "#747474",
        "edit-text-color": "#4A90E2",
        "delete-text-color": "#FF686C",
        "overlay-color": "#17252A26",
        "workoutlog-details": "#747474",
        "add-workout": "#00000066",
        "bgf-from": "#2E2E2E",
        "bgf-via": "#1E1E1E",
        "bgf-end": "#151515"
      }
    },
  },
  plugins: [],
}

