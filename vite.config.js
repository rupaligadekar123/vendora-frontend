import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss' // Naya correct package connection link

// https://vite.dev
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
