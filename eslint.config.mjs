import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

export default [
  ...(new FlatCompat({
    baseDirectory: dirname(fileURLToPath(import.meta.url)),
  }).extends("next/core-web-vitals", "next/typescript")),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
