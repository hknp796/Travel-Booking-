/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#243E50",

        // button color
        cta: "#70C3D4",

        // gray
        lgray: "#ADADAD",
      },
    },
  },
  plugins: [require("flowbite"), require("daisyui")],
};
