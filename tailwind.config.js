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
      keyframes: {
        new: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        new: "new 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("flowbite"), require("daisyui")],

  // Daisy UI config
  daisyui: {
    themes: ["light"],
  },
};
