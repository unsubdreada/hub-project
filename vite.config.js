import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_importer.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@views': path.resolve('./src/views'),
      '@styles': path.resolve('./src/styles')
    }
  }
})
