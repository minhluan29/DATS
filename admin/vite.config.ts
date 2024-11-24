import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../admin/build",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    hmr: true,
    port: Number(process.env.VITE_PORT) || 3000,
  },
});
