import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
export default defineConfig({
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        details: "details.html",
      },
    },
  },
});
