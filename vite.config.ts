import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "APP_",
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    ViteImageOptimizer(),
  ],
  server: {
    host: "0.0.0.0",
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".ts": "tsx",
      },
    },
    include: [],
  },
});
