import { createRequire } from 'node:module'
import { fileURLToPath, URL } from 'node:url'

import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'

const require = createRequire(import.meta.url)

export default defineConfig(async ({ mode }) => {
    // https://vitejs.dev/config/#using-environment-variables-in-config
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [
            env.VUE_DEVTOOLS &&
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                (await import('vite-plugin-vue-devtools')).default(),
            env.VISUALIZE_BUILD &&
                (await import('rollup-plugin-visualizer')).visualizer({
                    filename: `logs/stats-${new Date().toISOString()}.html`,
                    open: true,
                    template: 'treemap'
                }),
            vue(),
            ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }),
            AutoImport({
                include: [/\.ts?$/, /\.vue$/],
                imports: [
                    'vue',
                    {
                        from: 'vue',
                        imports: ['ButtonHTMLAttributes', 'AnchorHTMLAttributes'],
                        type: true
                    },
                    {
                        '@vueuse/core': ['useStorage', 'usePreferredLanguages'],
                        'vue-i18n': ['useI18n', 'createI18n'],
                        pinia: ['defineStore', 'storeToRefs']
                    }
                ],
                dts: true,
                eslintrc: {
                    enabled: true
                }
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import 'include-media/dist/_include-media.scss';
                        @import '@/assets/styles/breakpoints.scss';
                    `
                }
            }
        }
    }
})
