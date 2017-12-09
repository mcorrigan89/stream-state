import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'dist/StreamState.js',
  output: [
    { format: 'umd', file: './lib/StreamState.umd.js' },
		{ format: 'es', file: './lib/StreamState.esm.js' }
  ],
  sourcemap: true,
  treeshake: true,
  name: 'StreamState',
  plugins:[ 
    resolve(),
    commonjs()
  ]
};