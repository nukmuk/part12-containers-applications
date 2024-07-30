import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const target = "http://backend:3001/";
console.log("USING TARGET:", target)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: target,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
