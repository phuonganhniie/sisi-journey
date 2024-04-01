import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api/wakatime-proxy': {
        target: 'https://wakatime.com/api/v1/users/current',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/wakatime-proxy/, ''),
      },
    },
    cors: false
  },
});
