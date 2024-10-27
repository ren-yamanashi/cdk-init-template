import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.strict,
  ...tsEslint.configs.stylistic,
  {
    files: ["lib/**/*.ts", "bin/*.ts", "test/**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: true,
        project: "./tsconfig.json",
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      /**
       * 無効にするルール
       */
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "off",

      /**
       * 有効にするルール
       */
      "@typescript-eslint/explicit-module-boundary-types": "error",
      // NOTE: `@typescript-eslint/require-await`を有効にする場合、`require-await`は無効にする必要がある
      // https://typescript-eslint.io/rules/require-await/#how-to-use
      "require-await": "off",
      "@typescript-eslint/require-await": "error",
      // NOTE: `@typescript-eslint/no-empty-function`を有効にする場合、`no-empty-function`は無効にする必要がある
      // https://typescript-eslint.io/rules/no-empty-function/#how-to-use
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "warn",
      // NOTE: `@typescript-eslint/no-restricted-imports`を有効にする場合、`no-restricted-imports`は無効にする必要がある
      // https://typescript-eslint.io/rules/no-restricted-imports/#how-to-use
      "no-restricted-imports": "off",
      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "(\\.?\\.*/)?(constructs/)?/[^/]+/private/*",
              message: "privateディレクトリ内のモジュールはimportできません。",
            },
          ],
        },
      ],
      "import/order": [
        "warn",
        {
          alphabetize: { order: "asc" },
          "newlines-between": "always",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  // NOTE: `ignores`に指定したパターンはESLintによってグローバルに無視される。
  //       参考: https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
  {
    ignores: [
      "node_modules",
      ".vscode",
      "package.json",
      "jest.config.js",
      "*.js",
    ],
  }
);
