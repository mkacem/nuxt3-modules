import localeEN from "./locales/en.json";
import localeFR from "./locales/fr.json";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr:false,
  modules: [
    "./modules/module-a",
    "./modules/module-b",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: ["en", "fr"],
    dynamicRouteParams: true,
    strategy: 'prefix',
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        ["en"]: localeEN,
        ["fr"]: localeFR,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  }
})
