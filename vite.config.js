import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Fandom-K/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://fandom-k-api.vercel.app",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    historyApiFallback: true,
  },
});
