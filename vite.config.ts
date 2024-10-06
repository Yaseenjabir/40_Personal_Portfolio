import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.JPG", "**/*.JPEG"],
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
});
