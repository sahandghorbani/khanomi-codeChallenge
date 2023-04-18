// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  app: {
    head: {
      title: "Khanoomi-codeChallenge",
      meta: [{ name: "Khanoomi-codeChallenge", content: "code challenge" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  // accessing to environment variables
  runtimeConfig: {
    public: {
      PUBLIC_KEY: process.env.PUBLIC_KEY,
      BASE_URL: process.env.BASE_URL
    },
  },
  ssr: false,
});
