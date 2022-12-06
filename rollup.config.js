import babel from '@rollup/plugin-babel';
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = ["react", "react-dom", "react/jsx-runtime", "styled-components"];

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions,
    }),
    typescript(),
    image(),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: './node_modules/**',
      extensions,
    }),
  ],
  external,
};