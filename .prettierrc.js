module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  overrides: [
    {
      files: '*.mdx',
      options: {
        proseWrap: 'always',
        printWidth: 100,
      },
    },
  ],
  plugins: [require('prettier-plugin-tailwindcss')],
};
