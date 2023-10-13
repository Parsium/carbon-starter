module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:no-unsanitized/DOM",
  ],
  ignorePatterns: ["dist", "coverage", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["src/**/*.spec.ts*"],
      plugins: ["vitest"],
      extends: ["plugin:vitest/recommended"],
    },
  ],
};
