import { defineConfig } from 'cypress'

/**
 * TODO: надо дождаться поддержки .mts конфига, чтобы этот файл можно было сделать TypeScript
 * @see https://github.com/cypress-io/cypress/issues/24962
 */

export default defineConfig({
    e2e: {
        specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
        baseUrl: 'http://localhost:4173',
        viewportWidth: 1920,
        viewportHeight: 1080
    },
    video: true
})
