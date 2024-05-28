import js from "@eslint/js"
import importPlugin from "eslint-plugin-import"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import unuserdPlugin from "eslint-plugin-unused-imports"
import tseslint from "typescript-eslint"

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  plugins: {
    import: importPlugin,
    "unused-imports": unuserdPlugin,
    react: reactPlugin,
    "react-hooks": reactHooksPlugin,
  },
  rules: {
    "unused-imports/no-unused-imports": "warn",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc" },
      },
    ],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
  },
  ignores: [".next/**", "out/**"],
})
