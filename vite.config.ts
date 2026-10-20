import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Custom domain (thomasevans.dev) is served from site root, so base must be '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
