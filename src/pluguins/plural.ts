import * as Plurals from 'make-plural/plurals'
import { sprintf } from 'sprintf-js'
import type { App } from 'vue'
import type { ComposerTranslation, Locale } from 'vue-i18n'

import { type IPlurals, setPlurals } from '@/composables/usePlurals'
import type { SupportedLocales } from '@/constants/internationalization'

const DEFAULT_PLURAL_CATEGORY = 'other'

const pluralsPlugin = (app: App, locale: Locale, t: ComposerTranslation) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const plurals = (key: string, quantity: number | string = 0, ...args: any[]) => {
        const pluralCategory = Plurals[locale as SupportedLocales]?.(quantity) || DEFAULT_PLURAL_CATEGORY

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return sprintf(t(`${key}.${pluralCategory}`), ...args)
    }

    setPlurals(app, plurals)

    app.config.globalProperties.$plurals = plurals
}

export default pluralsPlugin

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $plurals: IPlurals
    }
}
