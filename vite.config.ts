import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [
    react(),
    viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
    viteCompression({ algorithm: "gzip", ext: ".gz" }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor":  ["react", "react-dom", "react-router-dom"],
          "ui-vendor":     ["@radix-ui/react-dialog", "@radix-ui/react-tooltip", "lucide-react"],
          "motion-vendor": ["framer-motion"],
          "query-vendor":  ["@tanstack/react-query"],
          "lottie-vendor": ["@lottiefiles/react-lottie-player"],
          "gsap-vendor":   ["gsap"],
        },
      },
    },
  },
}));
