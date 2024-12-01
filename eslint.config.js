import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      // Exemplo de regras para controlar quebras de linha
      "newline-before-return": "off", // Desativa quebra de linha antes do `return`
      "lines-between-class-members": "off", // Força quebra de linha entre membros de classes
      "eol-last": "off", // Garante uma linha vazia no final do arquivo
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "var", next: "return" }, // Força linha vazia entre `var` e `return`
      ],
    },
  },
];


