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
      ssr:true
})
