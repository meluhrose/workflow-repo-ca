import js from "@eslint/js";
import globals from "globals";
import vitest from "eslint-plugin-vitest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.test.{js,mjs,cjs}"], plugins: { vitest }, rules: vitest.configs.recommended.rules },
]);
