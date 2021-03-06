// import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import vuePlugin from 'rollup-plugin-vue';
// import { terser } from "rollup-plugin-terser";
import { eslint } from 'rollup-plugin-eslint';

export default {
  input: 'src/main.js',
  output: {
    file: 'lib/main.js',
    format: 'esm',
  },
  plugins: [
    commonjs(),
    // resolve(),
    vuePlugin(),
    // terser(),
    eslint(),
  ],
};