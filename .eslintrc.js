module.exports = {
    env: {
        es6: true,
    },
    extends: [
        'react-app',
        'airbnb',
        'prettier',
        'prettier/react',
        'eslint:recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: 'readonly'
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier'
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.js']
            }
        ],
        'import/prefer-default-export': 'off',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        "react/jsx-props-multiline": ["error", {
            "maxSingular": 2,
            "maxMulti": 1,
            "when": "always"
        }],
        'react/jsx-indent-props': [2, 2],
        'react/jsx-closing-bracket-location': [
            2,
            'tag-aligned',
        ],
    },
};