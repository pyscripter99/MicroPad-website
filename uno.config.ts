// uno.config.ts
import { defineConfig, presetIcons, presetUno } from "unocss";
import { extendCatppuccin } from "unocss-catppuccin";

export default defineConfig({
    content: {
        filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
    },
    presets: [
        presetUno(),
        presetIcons({}),
        extendCatppuccin({
            prefix: "ctp",
            defaultVariant: "mocha",
        }),
    ],
});
