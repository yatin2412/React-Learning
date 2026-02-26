import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

function cleanGlobals(globalsObj) {
  return Object.fromEntries(
    Object.entries(globalsObj).map(([key, value]) => [key.trim(), value])
  );
}

export default [
  {
    ignores: ["node_modules", "build", "dist", "public"],
  },

  {
    ...js.configs.recommended,
    languageOptions: {
      globals: cleanGlobals(globals.browser),
    },
  },

  {
    files: ["webpack.config.js", "*.config.js", "*.config.cjs", "*.setup.cjs"],
    languageOptions: {
      globals: cleanGlobals(globals.node),
    },
  },

  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": reactHooks,
      import: importPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      globals: cleanGlobals(globals.browser),
    },
    rules: {
      "no-warning-comments": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
];
