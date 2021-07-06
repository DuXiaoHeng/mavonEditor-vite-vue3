import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mdToText from "./plugin/mdToText"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mdToText()]
})
