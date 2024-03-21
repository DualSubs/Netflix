import json from '@rollup/plugin-json';
import commonjs from "@rollup/plugin-commonjs";

export default [
	{
		input: 'src/Netflix.request.beta.js',
		output: {
			file: 'js/Netflix.request.beta.js',
			//format: 'es',
			banner: '/* README: https://github.com/DualSubs */',
		},
		plugins: [json(), commonjs()]
	},
	{
		input: 'src/Netflix.response.beta.js',
		output: {
			file: 'js/Netflix.response.beta.js',
			//format: 'es',
			banner: '/* README: https://github.com/DualSubs */',
		},
		plugins: [json(), commonjs()]
	},
];
