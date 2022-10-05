module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    rules: {
        'color-named': 'never',
        'font-family-name-quotes': 'always-where-required',
        'font-weight-notation': 'named-where-possible',
        'function-url-no-scheme-relative': true,
        'function-url-quotes': 'always',
        'string-quotes': 'single',
        'value-keyword-case': 'lower',
        'unit-disallowed-list': [],
        'max-empty-lines': 2,
        'no-descending-specificity': true,
        'no-duplicate-selectors': true,
        'font-family-no-missing-generic-family-keyword': null,
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['/^lost-/']
            }
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen'
                ]
            }
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null
    },
    ignoreFiles: ['node_modules/*', 'static/**', 'src/stories/**'],
    defaultSeverity: 'error',
    overrides: [
        {
            files: ['*.svelte', '**/*.svelte'],
            customSyntax: require('postcss-html')({
                css: 'postcss-safe-parser'
            })
        }
    ]
};
