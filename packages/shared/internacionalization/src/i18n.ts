import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../locales/en/translation.json'
import pt from '../locales/pt/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      pt: {
        translation: pt
      }
    },
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
