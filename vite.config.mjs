import { defineConfig } from "vite";

export default defineConfig({
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