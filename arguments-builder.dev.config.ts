import { defineConfig } from "@nsnanocat/arguments-builder";
import { moduleArgs } from "./arguments-builder.full.config.ts";

export default defineConfig({
	output: {
		surge: {
			path: "./dist/DualSubs.Netflix.dev.sgmodule",
			template: "./template/surge.dev.handlebars",
			transformEgern: {
				enable: true,
				path: "./dist/DualSubs.Netflix.dev.yaml"
			}
		},
		loon: {
			path: "./dist/DualSubs.Netflix.dev.plugin",
			template: "./template/loon.dev.handlebars"
		},
		customItems: [
			{
				path: "./dist/DualSubs.Netflix.dev.snippet",
				template: "./template/quantumultx.dev.handlebars"
			},
			{
				path: "./dist/DualSubs.Netflix.dev.stoverride",
				template: "./template/stash.dev.handlebars"
			},
			{
				path: "./dist/DualSubs.Netflix.dev.srmodule",
				template: "./template/shadowrocket.dev.handlebars"
			}
		],
		boxjsSettings: {
			path: "./dist/DualSubs.Netflix.dev.boxjs.json",
			scope: "@DualSubs.Netflix.Settings"
		}
	},
	args: moduleArgs,
});
