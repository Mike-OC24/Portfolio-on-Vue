import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
//  publicPath: '/Portfolio-on-vue/',
  publicPath: process.env.NODE_ENV === 'production'
  ? '/Portfolio-on-vue/'
  : '/',
  plugins: [vue()]
})
