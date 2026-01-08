import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:10075',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
        // headers: {
        //   'X-Forwarded-Proto': 'http',
        //   'X-Forwarded-Host': 'localhost:5173',
        // },
      },
      '/oauth2': {
        target: 'http://localhost:10075',
        changeOrigin: true,
      },
      '/login/oauth2': {
        target: 'http://localhost:10075',
        changeOrigin: true,
      },
      '/logout': {
        target: 'http://localhost:10075',
        changeOrigin: true,
      },
    },
    allowedHosts: ['localhost', '127.0.0.1', '192.168.1.100'],
    port: 5174,
  },
})
