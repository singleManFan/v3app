import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      views: path.resolve(__dirname, "src/views"),
      utils: path.resolve(__dirname, "src/utils"),
      composables: path.resolve(__dirname, "src/composables"),
    }
  },
  plugins: [vue()]
})
