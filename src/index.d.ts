type Locale = ["ar", "de", "en", "es", "fr", "he", "it", "ja", "ko", "nl", "pt-BR", "ru", "zh-Hans", "zh-Hant"]
export default class AmplifyI18n {
    static configure(locales: Locale[]): void;
    static loadLocale(locale: Locale): void;
}
