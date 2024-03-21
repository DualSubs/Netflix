import json from '@rollup/plugin-json';
import commonjs from "@rollup/plugin-commonjs";
import terser from '@rollup/plugin-terser';

export default [
	{
		input: 'src/Netflix.response.js',
		output: {
			file: 'js/Netflix.response.js',
			format: 'es',
			banner: '/* README: https://github.com/DualSubs */',
		},
		plugins: [json(), commonjs(), terser()]
	},
];
