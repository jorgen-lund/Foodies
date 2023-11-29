import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from '../localization/en.json';
import nb from '../localization/nb.json';

export const languageResources = {
  en: {translation: en},
  nb: {translation: nb},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
