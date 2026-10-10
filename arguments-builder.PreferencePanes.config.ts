import { defineConfig } from "@nsnanocat/arguments-builder";
import { argLanguages0, argLanguages1, argLogLevel, argType } from "./arguments-builder.full.config.ts";

export const panels = [
	{ id: "DualSubs.Netflix", scope: "@DualSubs.Netflix.Settings", args: [argType, argLanguages0, argLanguages1, argLogLevel] },
];

export const devPanels = [
	{ id: "DualSubs.Netflix", scope: "@DualSubs.Netflix.Settings", args: [argType, argLanguages0, argLanguages1, argLogLevel] },
];

export default defineConfig({ args: panels[0].args });
