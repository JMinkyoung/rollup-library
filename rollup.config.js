import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript({ useTsconfigDeclarationDir: true, tsconfig: './tsconfig.json' }),
    babel({
      babelHelpers: 'bundled',
      exclude: ['node_modules/**/*.(ts|tsx|js|jsx)', 'src/stories/**'],
      include: 'src/**/*.(ts|tsx|js|jsx)',
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.es', '.es6', '.mjs'],
    }),
  ],
  external: ['react', 'react-dom', 'styled-components'],
};