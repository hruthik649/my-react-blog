import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // If you added this before, keep it. Otherwise, you might not have it.
    port: 3000
  }
})