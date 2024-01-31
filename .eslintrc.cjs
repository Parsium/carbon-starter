module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:no-unsanitized/DOM",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeature: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
