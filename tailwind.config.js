/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark_blue_Elements: "#2b3945",
        Very_dark_blue_Mode_bg: "#202c37",
        Very_dark_blue_Text_Light_Mode: "#111517",
        Dark_gray_LightMode_inputs_and_Text: "#858585",
        Very_Light_Gray_bg_LightMode: "#fafafa",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
