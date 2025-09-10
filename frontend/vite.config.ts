import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    hmr: {
      port: 3000,
      // Untuk Docker, gunakan 0.0.0.0 agar bisa diakses dari container lain
      host: "0.0.0.0"
    },
    watch: {
      usePolling: true, // Needed for Docker on some systems
      interval: 1000, // Check for changes every second
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});