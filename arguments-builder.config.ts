import { defineConfig } from "@iringo/arguments-builder";

export default defineConfig({
	output: {
		surge: {
			path: "./dist/Netflix.sgmodule",
		},
		loon: {
			path: "./dist/Netflix.plugin",
		},
		customItems: [
			{
				path: "./dist/Netflix.snippet",
				template: "./template/quantumultx.handlebars",
			},
			{
				path: "./dist/Netflix.stoverride",
				template: "./template/stash.handlebars",
			},
			{
				path: "./dist/Netflix.yaml",
				template: "./template/egern.handlebars",
			},
			{
				path: "./dist/Netflix.srmodule",
				template: "./template/shadowrocket.handlebars",
			},
		],
		dts: {
			isExported: true,
			path: "./src/types.d.ts",
		},
		boxjsSettings: {
			path: "./template/boxjs.settings.json",
			scope: "@DualSubs.Netflix.Settings",
		},
	},
	args: [
		{
			key: "Switch",
			name: "总功能开关",
			defaultValue: true,
			type: "boolean",
			description: "是否启用此APP修改",
			exclude: ["surge", "loon"],
		},
		{
			key: "ShowOnly",
			name: "[字幕]只显示翻译字幕",
			defaultValue: false,
			type: "boolean",
			description: "是否仅显示翻译后的字幕，不显示源语言字幕。",
		},
		{
			key: "Position",
			name: "[字幕]主语言（源语言）字幕位置",
			defaultValue: "Forward",
			type: "string",
			options: [
				{
					key: "Forward",
					label: "上面（第一行）",
				},
				{
					key: "Reverse",
					label: "下面（第二行）",
				},
			],
			description: "主语言（源语言）字幕的显示位置。",
		},
		{
			key: "Vendor",
			name: "[翻译器]服务商API",
			defaultValue: "Google",
			type: "string",
			options: [
				{
					"key": "Google",
					"label": "Google Translate"
				},
				{
					"key": "Microsoft",
					"label": "Microsoft Translator（需填写API）"
				},
			],
			description: "请选择翻译器所使用的服务商API，更多翻译选项请使用BoxJs。",
		},
	],
});
