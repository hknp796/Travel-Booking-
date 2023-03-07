// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-icon", "@pinia/nuxt", "nuxt-headlessui", "@nuxt-alt/proxy"],
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      apiBase: "",
      apiSecret: process.env.NUXT_API_SECRET,
    },
  },

  // proxy: {
  //   enableProxy: true,
  //   proxies: {
  //     "/api": {
  //       target: "http://sandbox.raynatours.com/api",
  //       changeOrigin: true,
  //       rewrite: (path: string) => {
  //         return path.replace(/^\/api/, "");
  //       },
  //     },
  //   },
  //   fetch: true,
  // },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
