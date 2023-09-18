const messages = {
  Hello: {
    en: "Hello",
    fr: "Salut",
    es: "Hola",
  },
  Default: {
    en: "The query didn't return any results.",
    fr: "La requête n'a renvoyé aucun résultat.",
    es: "La consulta no arrojó ningún resultado.",
  },
};

const locale = getLocale();

handlebars.registerHelper(
  "translate",
  (message) => messages[message][locale] ?? messages[message]["en"]
);
