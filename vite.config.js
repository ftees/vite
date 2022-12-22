import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  build: {

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['/vue', '/sweetalert2', '/vue3-audio-player', '/sweetalert2/dist/sweetalert2.min.css', '/vue3-audio-player/dist/style.css'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})