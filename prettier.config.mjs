/**
 * @type {import('prettier').Config}
 */
export default {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  plugins: [
    'prettier-plugin-jsdoc',
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
  ],
}
