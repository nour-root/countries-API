import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["**/*.html"],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname, // تحديد المسار بشكل يدوي
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        details: "./details.html",
      },
    },
  },
});
