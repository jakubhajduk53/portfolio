/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      peach: "#F6BE9A",
      gold: "#D1AC00",
      "brunswick-green": "#004643",
      cornsilk: "#FAF4D3",
      sunset: "#FFCC85",
      "carrot-orange": "#F58F00",
      "papaya-whip": "#FFECD1",
      "orange-wheel": "#FF7D00",
      sienna: "#78290F",
      "rich-black": "#001524",
      "carribean-current": "#15616D",
      ivory: "#FDFBED",
      "arylide-yellow": "#EFDB6C",
      citrine: "#E9CE35",
      vanilla: "#F7EDB6",
      "light-colombia-blue": "#CDE7F4",
      "dark-colombia-blue": "#BCDFF0",
      "uranian-blue": "#ACD7EC",
      "tea-green": "#D8ECC1",
      pistachio: "#BADD92",
      "yellow-green": "#93C954",
    },
    extend: {
      height: {
        "project-screen": "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
