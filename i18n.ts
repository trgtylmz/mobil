import * as Localization from "react-native-localize";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

let languageCode = 'en';
try {
  if (Localization && typeof Localization.getLocales === 'function') {
    const locales = Localization.getLocales() || [];
    if (Array.isArray(locales) && locales.length > 0 && locales[0] && locales[0].languageCode) {
      languageCode = locales[0].languageCode;
    }
  }
} catch (e) {
  // Fallback to 'en' if react-native-localize native module isn't available
  // and avoid crashing the app during initialization.
  console.warn('react-native-localize failed, defaulting language to en', e);
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: languageCode,
  resources: {
    en: {translation: {welcome: 'Welcome to Temsa Mobile'}},
    tr: {translation: {welcome: "Temsa Mobil'e Hoşgeldiniz"}},
    es: {translation: {welcome: 'Bienvenido a Temsa Mobile'}},
  },
});

export default i18n;
