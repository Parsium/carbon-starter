/// <reference types="vite/client" />
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~@sage": path.resolve(__dirname, "./node_modules/@sage/"),
    },
  },
  test: {
    globals: false,
    environment: "jsdom",
    setupFiles: ["setup-tests.ts"],
    coverage: {
      enabled: true,
      provider: "istanbul",
    },
  },
});
