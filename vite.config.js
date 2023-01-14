import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //origin: "localhost",
    //port: 3000,
    origin: "0.0.0.0",
    port: $PORT,
  },
});
