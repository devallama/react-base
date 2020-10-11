/* 
    Eslint rule levels:
        0 : off
        1 : warn
        2 : error
*/

module.exports = {
    plugins: ['react', 'babel', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'stylelint',
        'prettier',
        'prettier/react'
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
        mocha: true,
        es6: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        'prettier/prettier': 2,
        'arrow-body-style': [2, 'as-needed'],
        'arrow-parens': [2, 'as-needed'],
        'babel/no-invalid-this': 1,
        'babel/valid-typeof': 2,
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: true
            }
        ],
        'comma-dangle': [2, 'never'],
        'comma-spacing': 2,
        'eslint-comments/disable-enable-pair': 0,
        eqeqeq: [2, 'smart'],
        'keyword-spacing': [
            2,
            {
                before: true
            }
        ],
        'lines-between-class-members': [
            2,
            'always',
            {
                exceptAfterSingleLine: true
            }
        ],
        'multiline-ternary': 0,
        'no-async-promise-executor': 2,
        'no-debugger': 0,
        'no-alert': 2,
        'no-confusing-arrow': 0,
        'no-console': [
            1,
            {
                allow: ['error', 'info', 'warn']
            }
        ],
        'no-prototype-builtins': 0,
        'no-unused-expressions': [
            2,
            {
                allowTernary: true,
                allowShortCircuit: true
            }
        ],
        'node/no-extraneous-import': 0,
        'node/no-missing-import': 0,
        'node/no-unpublished-require': 0,
        'node/no-unsupported-features/es-syntax': 0,
        'object-curly-spacing': [2, 'always'],
        'react/display-name': 0,
        'react/jsx-curly-spacing': [
            2,
            {
                when: 'never',
                children: true
            }
        ],
        'react/jsx-tag-spacing': [
            2,
            {
                beforeSelfClosing: 'always',
                beforeClosing: 'never'
            }
        ],
        'react/no-this-in-sfc': 2,
        'react/no-unsafe': 2,
        'react/no-unused-prop-types': 1,
        'react/no-unused-state': 1,
        'react/no-will-update-set-state': 2,
        'react/prop-types': [
            2,
            {
                ignore: ['children', 'history', 'location', 'theme']
            }
        ],
        'react/require-default-props': 0,
        'react/self-closing-comp': 2,
        'react/sort-comp': 1,
        'react/sort-prop-types': 1,
        'react/style-prop-object': 2
    },
    overrides: [
        {
            files: '**/*test*.js',
            rules: {
                'node/no-unpublished-require': 0,
                'node/no-missing-require': 0,
                'jest/valid-expect': 0
            }
        }
    ]
};
