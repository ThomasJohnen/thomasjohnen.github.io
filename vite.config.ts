import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // Votre index.html est dans le dossier 'client'
  root: path.resolve(import.meta.dirname, "client"),

  // Le site est hébergé à la racine du domaine
  base: "/",

  plugins: [
    react(),
    // Plugins Replit supprimés (inutiles sur GitHub Pages)
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  build: {
    // Correction critique : sortie standard 'dist' (pas 'dist/public')
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
