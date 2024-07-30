import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const target = process.env.VITE_BACKEND_URL || "http://backend:3001/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
