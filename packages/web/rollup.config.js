// @ts-nocheck
const babel = require('rollup-plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const external = require('rollup-plugin-peer-deps-external');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const terser = require('rollup-plugin-terser').terser;
// const string = require('rollup-plugin-string').string;

const packageJson = require('./package.json');

module.exports = [
  {
    input: './src/index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),

      commonjs(),
      // string({
      //   include: '**/*.css',
      // }),
      terser(),
    ],
  },
];
