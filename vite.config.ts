import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Path to your entry file
      name: 'StringHarmony',
      formats: ['es'], // Output format as ESM
      fileName: 'index',
    },
    rollupOptions: {
      external: ['node:fs'],
      output: {
        globals: {
          'node:fs': 'fs',
        },
      },
    },
  },
  plugins: [
    dts(), // Plugin to generate .d.ts files
  ],
})
