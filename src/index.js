import { I18n } from "aws-amplify";
import { Translations } from "@aws-amplify/ui-components";

const LOCALES = [
  "de",
  "en",
  "es",
  "fr",
  "pt-BR",
  "ru",
  "zh-hans",
  "zh-hant",
]

export default class AmplifyI18n {
  static configure(locales = LOCALES) {
    locales.forEach(locale => this.loadLocale(locale));
  }

  static loadLocale(locale) {
    if (!LOCALES.includes(locale)) return;
    let translations = require(`./intl/${locale}.json`);
    translations = Object
      .entries(translations)
      .reduce((memo, [key, content]) => {
        key = Translations[key]
        if (!key) return memo
        memo[key] = content
        return memo
      }, {})
    I18n.putVocabulariesForLanguage(locale, translations);
  }
}
