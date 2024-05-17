// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/": {
      isr: 3600,
      headers: {
        "Netlify-Vary": "query=page",
        "Cdn-Cache-Control": "public, s-maxage=31536000, must-revalidate",
      },
    },
    "/**": {
      isr: 3600,
      headers: {
        "Netlify-Vary": "query=page",
        "Cdn-Cache-Control": "public, s-maxage=31536000, must-revalidate",
      },
    },
  },
});
