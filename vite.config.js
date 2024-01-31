import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/"
  // build: {
  //   // other build options
  //   rollupOptions: {
  //     input: 'src/main.jsx',
  //   },
  // },
})
