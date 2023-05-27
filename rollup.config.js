// Rollup plugins
import babel from 'rollup-plugin-babel';
export default {
  input: 'scripts/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};