import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: false,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", "dist", ".next", "e2e"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "html", "lcov"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/test/**",
        "src/**/*.test.{ts,tsx}",
        "src/**/index.ts"
      ],
      // Presupuestos por capa: la logica (domain) exige mas que la UI.
      perFile: false,
      thresholds: {
        statements: 80,
        branches: 70,
        functions: 80,
        lines: 80,
        "src/domain/**": {
          statements: 90,
          branches: 85,
          functions: 90,
          lines: 90
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});