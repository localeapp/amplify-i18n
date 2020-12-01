# amplify-i18n
Centralization of locale data collection for [AWS Amplify](https://github.com/aws-amplify/amplify-js/blob/main/packages/amplify-ui-components/src/common/Translations.ts).

## Installation

AWS Amplify I18n is available as `amplify-i18n` package on npm.

```shell
$ npm install amplify-i18n --save
```
## Configuration

Somewhere in your app, preferably at the root level, configure Amplify I18n.

### Load all locales
If you don't specify any locales to the `configure` method, all the [available locales](#Locales) will be loaded.
```js
import { I18n } from "aws-amplify"
import AmplifyI18n from "amplify-i18n"

AmplifyI18n.configure()
I18n.setLanguage("fr")
```
### Load specific locales
If you want to load only a subset of the [available locales](#Locales), pass an array to the `configure` method.
```js
import { I18n } from "aws-amplify"
import AmplifyI18n from "amplify-i18n"

const locales = ["en", "fr", "de"]
AmplifyI18n.configure(locales)
I18n.setLanguage("fr")
```

## Locales
Amplify I18n follows the Best Current Practice 47 (BCP47) _Tags for Identifying Languages_.

Currently the following locales are available:
| Tag | Language|
| -| -|
| de | German |
| en | English |
| es | Spanish |
| fr | French |
| pt-BR | Portuguese (Brazil)
| ru | Russian
| zh-Hans | Simplified Chinese
| zh-Hant | Traditional Chinese

---
The translations are provided by [Locale](https://locale.to) for the community ♥️
