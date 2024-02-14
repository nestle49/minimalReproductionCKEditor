/**
 * @type {import('eslint/lib/shared/types').ConfigData}
 */
module.exports = {
    extends: ['./.eslintrc-auto-import.json', '@foodsoul/eslint-config/.eslintrc.js'],
    overrides: [
        {
            files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended']
        }
    ],
    parserOptions: {
        project: 'tsconfig.app.json'
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.js', '.ts']
            }
        }
    }
}
