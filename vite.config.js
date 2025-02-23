import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import process from "node:process";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env": process.env,
    },
    build: {
      outDir: "dist", // Çıktı klasörünün adı
    },
    publicDir: "public",
    optimizeDeps: {
      include: ["nouislider"],
    },
    server: {
      port: Number(env.VITE_PORT),
    },
    plugins: [react(), svgr()],
  };
});
