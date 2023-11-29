import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from '../localization/en.json';
import nb from '../localization/nb.json';

export const languageResources = {
  en: {translation: en},
  nb: {translation: nb},
};

const deviceLanguage = RNLocalize.getLocales()[0].languageCode;
const initialLanguage = languageResources.hasOwnProperty(deviceLanguage) ? deviceLanguage : 'en';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: initialLanguage,
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
