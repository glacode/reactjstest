import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // uncomment the following line to build for GitHub Pages
  //base: '/reactjstest/'
})
