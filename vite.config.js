import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Project pages are served from /Portfolio/, so only scope the base path at build time.
  base: command === 'build' ? '/Portfolio/' : '/',
  plugins: [react()],
}))
