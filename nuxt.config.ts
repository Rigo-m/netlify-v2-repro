// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // nitro: {
  //   preset: "./presets/netlify-v2-fixed.ts",
  // },
  routeRules: {
    "/": {
      swr: 3600,
    },
  },
});
