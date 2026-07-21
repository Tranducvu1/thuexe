import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: /thuexe/ | Vercel / local: /
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
