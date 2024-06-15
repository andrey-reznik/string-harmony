import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  esbuild: {
    format: 'cjs',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'string-harmony',
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [dts()],
})
