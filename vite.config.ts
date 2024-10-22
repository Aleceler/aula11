import react from "@vitejs/plugin-react";
import vitePluginSingleSpa from "vite-plugin-single-spa";
import {defineConfig} from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      preserveEntrySignatures: "exports-only",
      output: {
        format: "system",
      },
      external: ["@funcef/utils", "@funcef/components"]
    }
  },
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "mife",
      serverPort: 4102,
      spaEntryPoints: "src/spa.tsx",
    }),
  ],
});