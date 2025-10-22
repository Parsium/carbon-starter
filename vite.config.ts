/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~@sage": resolve(__dirname, "./node_modules/@sage/"),
    },
  },
  test: {
    globals: false,
    environment: "jsdom",
    setupFiles: ["setup-tests.ts"],
    coverage: {
      provider: "istanbul",
    },
  },
});
