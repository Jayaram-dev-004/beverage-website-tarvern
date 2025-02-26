import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/beverage-website-tarvern/',
  build: {
    assetsInlineLimit: 0, 
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    }
  }
})
