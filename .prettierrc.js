const config = {
  printWidth: 999999,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      options: {
        bracketSpacing: true,
        arrowParens: "always",
      },
    },
  ],
};

export default config;