/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "blue": "#202c37",
        "dark-blue": "#2b3945",
        "blue-text": "#111517",
        "dark-gray-inputs": "#858585",
        "very-light-gray": "#fafafa",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
