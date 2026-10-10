import { configAsset } from "./rollup.config.mjs";

export default [
	{ input: "config", output: { file: "./dist/config.dev.bundle.js", format: "es" }, plugins: [configAsset(".dev")] },
];
