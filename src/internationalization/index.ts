import { type Locale, type UseI18nOptions } from 'vue-i18n'

import { DefaultLocale, SupportedLocalesArray } from '@/constants/internationalization'
import { getMessages } from '@/internationalization/utils'

export type ComposerInstance = ReturnType<typeof useI18n<UseI18nOptions, string>>

const language = useStorage('locale', '')
const languages = usePreferredLanguages()

const findCurrentLocale = () => {
    return (
        SupportedLocalesArray.find((item: string) => item === language.value) ??
        languages.value.find(lang => SupportedLocalesArray.some((item: string) => item === lang)) ??
        DefaultLocale
    )
}

export const setLocale = (i18n: ComposerInstance, locale: Locale) => {
    i18n.locale.value = language.value = locale
}

export const loadLocaleMessages = async (i18n: ComposerInstance, locale: Locale) => {
    const messages = await getMessages(locale)

    i18n.setLocaleMessage(locale, messages)
}

export const setupI18n = () => {
    const locale = findCurrentLocale()

    return createI18n({
        fallbackLocale: locale,
        warnHtmlMessage: false,
        globalInjection: true,
        legacy: false,
        locale
    })
}
