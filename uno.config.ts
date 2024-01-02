// uno.config.ts
import {
    defineConfig,
    presetIcons,
    presetUno,
    presetTypography,
    presetWebFonts,
} from "unocss";
import { extendCatppuccin } from "unocss-catppuccin";
import { flavors } from "@catppuccin/palette";

export default defineConfig({
    content: {
        filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
    },
    presets: [
        presetUno(),
        presetWebFonts({
            provider: "google",
            fonts: {
                sans: "Roboto",
                mono: "Montserrat",
            },
            extendTheme: true,
        }),
        presetIcons(),
        presetTypography({
            cssExtend: {
                "pre:has(code)": {
                    "background-color": `${flavors.mocha.colors.mantle.hex} !important`,
                    position: "relative",
                },
            },
        }),
        extendCatppuccin({
            prefix: "ctp",
            defaultVariant: "mocha",
        }),
    ],
});
