import type { Locale } from 'vue-i18n'

import { loadLocaleMessages, setLocale } from '@/internationalization'

export const useLocale = () => {
    const i18n = useI18n()

    const updateLocale = async (locale: Locale) => {
        await loadLocaleMessages(i18n, locale)
        setLocale(i18n, locale)
    }

    return {
        updateLocale
    }
}
