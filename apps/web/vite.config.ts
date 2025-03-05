import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()] as unknown as PluginOption[],
})
