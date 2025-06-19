import globals from "globals"
import { defineConfig } from "eslint/config"
import js from "@eslint/js"
import { latestEcmaVersion } from "espree"

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: latestEcmaVersion,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    files: ["**/*.js"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
])
