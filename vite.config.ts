import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@lib", replacement: "/src/lib" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@context", replacement: "/src/context" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@types", replacement: "/src/types" },
    ],
  },
});
