import i18next from 'i18next'
import frTranslation from 'zod-i18n-map/locales/fr/zod.json'
import enTranslation from 'zod-i18n-map/locales/en/zod.json'
import { makeZodI18nMap } from 'zod-i18n-map'
import { z } from 'zod'
import { getLocale } from '@/locales/dictionary'

const fr = i18next.createInstance()
fr.init({
  lng: 'fr',
  resources: {
    fr: { zod: frTranslation },
  },
})

const en = i18next.createInstance()
en.init({
  lng: 'en',
  resources: {
    en: { zod: enTranslation },
  },
})

const zodMap = {
  en: makeZodI18nMap({ t: en.t }),
  fr: makeZodI18nMap({ t: fr.t }),
}

// Set zod error map by user's locale.
// The error message should be translated based on user's locale.
z.setErrorMap((err, ctx) => zodMap[getLocale()](err, ctx))

export { z }
