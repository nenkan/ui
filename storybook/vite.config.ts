import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ui/' : '/',
  plugins: [
    react({
      // React 19 automatic JSX transform
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // Use the modern Sass API
      }
    }
  }
})
