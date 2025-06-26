import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHub = process.env.GITHUB_PAGES === "true";

// Use VITE_BASE_PATH if provided, otherwise fall back based on environment
const basePath = process.env.VITE_BASE_PATH || (isGitHub ? "/web_4_Veer_Homeopathy_Store-main-/" : "/");

export default defineConfig({
  plugins: [react()],
  base: basePath,
});
