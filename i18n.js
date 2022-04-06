module.exports = {
  "locales": ["pt-BR"],
  "defaultLocale": "pt-BR",
  "pages": {
    "/": ["Index"],
    "/twitch": ["Twitch"],
    "/500": ["ServerSideError"]
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/translations/${locale}/${namespace}`).then((m) => m.default),
}