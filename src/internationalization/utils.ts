import type { Locale } from 'vue-i18n'

export const getMessages = async (locale: Locale): Promise<Record<string, string>> => {
    let messages = {}

    try {
        const response = await fetch(`/locales/${locale}.json`)

        if (response.ok) {
            messages = (await response.json()) as Record<string, string>
        } else {
            console.error(`HTTP Error: ${response.status}`)
        }
    } catch (error) {
        console.error(error)
    }

    return messages
}
