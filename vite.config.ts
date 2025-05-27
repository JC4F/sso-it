import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5002,
    https: {
      key: "./localhost-key.pem",
      cert: "./localhost.pem",
    },
  },
  resolve: {
    alias: {
      querystring: "querystring-es3",
    },
  },
});
