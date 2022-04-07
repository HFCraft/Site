module.exports = {
  "locales": ["pt-BR"],
  "defaultLocale": "pt-BR",
  "pages": {
    "/": ["Index"],
    "/twitch": ["Twitch"],
    "/play": ["Play/Index"],
    "/play/java": ["Play/Java"],
    "/play/bedrock": ["Play/Bedrock"],
    "/400": ["BadRequest"],
    "/404": ["NotFound"],
    "/500": ["ServerSideError"]
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/translations/${locale}/${namespace}`).then((m) => m.default),
}