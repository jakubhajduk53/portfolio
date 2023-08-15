/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "project-screen": "calc(100vh - 4rem)",
      },
      colors: {
        cornsilk: "#FAF4D3",
        ivory: "#FDFBED",
        vanilla: "#F7EDB6",
        "carrot-orange": "#F58F00",
      },
    },
  },
  plugins: [],
};
