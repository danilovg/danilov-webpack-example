import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import css from "rollup-plugin-import-css";
import image from '@rollup/plugin-image';
import replace from '@rollup/plugin-replace';

export default {
   input: 'src/index.js',
   output: {
      file: 'dist/bundle.js',
      format: 'iife'
   },
   plugins: [
      nodeResolve({
         extensions: ['.js', '.jsx']
      }),
      babel({
         babelHelpers: 'bundled',
         presets: ['@babel/preset-react'],
         extensions: ['.js', '.jsx']
      }),
      replace({
         preventAssignment: true,
         'process.env.NODE_ENV': JSON.stringify('production'),
       }),
      commonjs(),
      image(),
      css(),
   ],
}