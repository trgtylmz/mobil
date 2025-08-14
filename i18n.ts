import * as Localization from 'react-native-localize';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: Localization.getLocales()[0].languageCode,
  resources: {
    en: {translation: {welcome: 'Welcome to Temsa Mobile'}},
    tr: {translation: {welcome: "Temsa Mobil'e Hoşgeldiniz"}},
    es: {translation: {welcome: 'Bienvenido a Temsa Mobile'}},
  },
});
