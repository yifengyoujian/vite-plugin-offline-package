import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import offline from "vite-plugin-offline-package"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    offline({
      packageNameKey: "packageId",
      packageNameValue: "rpc_tch",
      version: "1.0.0",
      baseUrl: "https://localhost:8080",
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
