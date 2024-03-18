import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: {
      components: "/src/components",
      features: "/src/features",
      routes: "/src/routes",
      assets: "/src/assets",
      context: "/src/context",
      hooks: "/src/hooks",
      utils: "/src/utils",
      api: "/src/api",
    },
  },
})

