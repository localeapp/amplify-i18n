import { I18n } from "aws-amplify";
import { Translations } from "@aws-amplify/ui-components";

const LOCALES = [
  "ar",
  "de",
  "en",
  "es",
  "fr",
  "he",
  "it",
  "ja",
  "ko",
  "nl",
  "pt-BR",
  "ru",
  "zh-Hans",
  "zh-Hant",
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
      .reduce((acc, [key, content]) => {
        key = Translations[key]
        if (!key) return acc
        acc[key] = content
        return acc
      }, {})
    I18n.putVocabulariesForLanguage(locale, translations);
  }
}
