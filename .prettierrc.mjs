/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.mdx',
      options: {
        proseWrap: 'always',
        printWidth: 100,
      },
    },
  ],
};
