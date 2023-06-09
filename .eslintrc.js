module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        "plugin:i18next/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react',
        'i18next'
    ],
    rules: {
        'react/jsx-indent': [2, 4], // Установить отступ в 4 пробела для JSX
        'react/jsx-indent-props': [2, 2], // Установить отступ в 4 пробела для JSX
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        'no-floating-promises': 'off',
        'explicit-function-return-type': 'off',
        strictNullChecks: 'off',
        'i18next/no-literal-string': ['err', {markupOnly: true}]
        // indent: [2, 4]
    }
}
