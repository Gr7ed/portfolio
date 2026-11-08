import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      onLog(level, warning, defaultHandler) {
        const isReactRouterDirectiveWarning =
          warning.code === "MODULE_LEVEL_DIRECTIVE" &&
          /[\\/]node_modules[\\/]react-router[\\/]/.test(warning.id ?? "");

        if (!isReactRouterDirectiveWarning) {
          defaultHandler(level, warning);
        }
      },
    },
  },
});