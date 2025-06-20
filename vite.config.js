// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', 

  server: {
    proxy: {
      '/usuarios': 'http://localhost:8000',
      '/emprendimientos': 'http://localhost:8000',
    },
  },
})