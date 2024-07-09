import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:10520',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
    port: 4080
  },
  resolve: {
    alias: {
      // app: resolve(__dirname, "src", "app"),
      // components: resolve(__dirname, "src", "components"),
      // hooks: resolve(__dirname, "src", "hooks"),
      // "@": path.resolve(__dirname, "./src"),
    },
  },

})
