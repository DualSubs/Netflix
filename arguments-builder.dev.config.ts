import { defineConfig } from "@iringo/arguments-builder";
import config from "./arguments-builder.config";

export default defineConfig({
	...config,
	output: {
		...config.output,
		surge: {
			...config.output.surge,
			path: "./dist/DualSubs.Netflix.dev.sgmodule",
			template: "./template/surge.dev.handlebars",
			transformEgern: { enable: true, path: "./dist/DualSubs.Netflix.dev.yaml" },
		},
		loon: { path: "./dist/DualSubs.Netflix.dev.plugin", template: "./template/loon.dev.handlebars" },
		customItems: config.output.customItems.map(item => ({
			...item,
			path: item.path.replace("DualSubs.Netflix.", "DualSubs.Netflix.dev."),
			template: item.template.replace(".handlebars", ".dev.handlebars"),
		})),
		boxjsSettings: { path: "./dist/DualSubs.Netflix.dev.boxjs.json", scope: "@DualSubs.Netflix.Settings" },
	},
});
