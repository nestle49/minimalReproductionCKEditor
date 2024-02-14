import '@/assets/styles/main.scss'

import { createPinia } from 'pinia'

import { setupI18n } from '@/internationalization'
import pluralsPlugin from '@/pluguins/plural'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const i18n = setupI18n()

const app = createApp(App as Component)

app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')

pluralsPlugin(app, i18n.global.locale.value, i18n.global.t)
