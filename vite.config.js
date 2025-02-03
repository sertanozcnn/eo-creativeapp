import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  optimizeDeps: {
    include: ["nouislider"],
  },
  /*server: {
    proxy: {
      "/api": {
        target: "http://localhost:5173", // API'nin bulunduğu sunucu adresi
        changeOrigin: true,
        secure: false,
      },
    },
  },*/

  plugins: [react(), svgr()],
});
