import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8088,
  },
  plugins: [
    react(),
  ],
  base: process.env.VITE_BASE_PATH || "/JoaoHenrique-portfolio/",
}));