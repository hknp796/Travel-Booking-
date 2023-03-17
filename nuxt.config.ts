// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-icon", "@pinia/nuxt", "nuxt-headlessui", "@nuxt-alt/proxy"],
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      apiBase: "http://sandbox.raynatours.com",
      apiSecret:
        "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkNWU4YWZhMC1mNGJhLTQ2NWUtYTAzOS1mZGJiYzMxZWZlZGUiLCJVc2VySWQiOiIzNzU0NSIsIlVzZXJUeXBlIjoiQWdlbnQiLCJQYXJlbnRJRCI6IjAiLCJFbWFpbElEIjoidHJhdmVsZ2F0ZXhAcmF5bmF0b3Vycy5jb20iLCJpc3MiOiJodHRwOi8vcmF5bmFhcGkucmF5bmF0b3Vycy5jb20iLCJhdWQiOiJodHRwOi8vcmF5bmFhcGkucmF5bmF0b3Vycy5jb20ifQ.i6GaRt-RVSlJXKPz7ZVx-axAPLW_hkl7usI_Dw8vP5w",
    },
  },

  proxy: {
    enableProxy: true,
    proxies: {
      "/api": {
        target: "http://sandbox.raynatours.com/api",
        changeOrigin: true,
        rewrite: (path: string) => {
          return path.replace(/^\/api/, "");
        },
      },
    },
    fetch: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
