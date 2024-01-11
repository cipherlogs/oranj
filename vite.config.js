import { defineConfig } from "vite";
import {resolve} from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve (__dirname, "src"),
      "@components": resolve (__dirname, "src/components"),
      "@main": resolve (__dirname, "src/components/main-content"),
      "@navigation": resolve (__dirname, "src/components/navigation"),
      "@styled": resolve (__dirname, "src/components/styled-components"),
      "@shared": resolve (__dirname, "src/components/shared"),
      "@data": resolve (__dirname, "src/data"),
      "@themes": resolve (__dirname, "src/themes"),
      "@hooks": resolve (__dirname, "src/hooks"),
      "@styles": resolve (__dirname, "src/styles"),
      "@context": resolve (__dirname, "src/context"),
    }
  },
  plugins: [react()],
})
