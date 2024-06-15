import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

//   bundle: true,
//   entryPoints: ['index.ts'],
//   external: ['locales/*'],
//   outfile: 'outfile.cjs',
//   format: 'cjs',
//   platform: 'node',
//   target: 'node14',

export default defineConfig({
  esbuild: {
    format: 'cjs',
  },
  build: {
    //Specifies that the output of the build will be a library.
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      //Defines the entry point for the library build. It resolves
      //to src/index.ts,indicating that the library starts from this file.
      name: 'string-harmony',
      //A function that generates the output file
      //name for different formats during the build
      fileName: (format) => `index.${format}.js`,
    },
    //Generates sourcemaps for the built files,
    //aiding in debugging.
    sourcemap: true,
    //Clears the output directory before building.
    emptyOutDir: true,
  },
  //dts() generates TypeScript declaration files (*.d.ts)
  //during the build.
  plugins: [dts()],
})
