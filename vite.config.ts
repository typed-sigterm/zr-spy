import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  root: 'popup',
  base: '/dist-popup/',
  plugins: [
    Vue(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  build: {
    emptyOutDir: true,
    outDir: '../dist-popup',
  },
  server: {
    port: 6608,
  },
  optimizeDeps: {
    include: ['naive-ui'],
  },
})
