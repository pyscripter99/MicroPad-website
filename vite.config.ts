import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import extractorSvelte from "@unocss/extractor-svelte";
import { svelteSVG } from "rollup-plugin-svelte-svg";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";

export default defineConfig({
    plugins: [
        UnoCSS({
            extractors: [extractorSvelte()],
        }),
        svelteSVG({
            enforce: "pre",
            svgo: {
                plugins: [
                    {
                        name: "preset-default",
                        params: {
                            overrides: {
                                inlineStyles: false,
                            },
                        },
                    },
                    "removeStyleElement",
                ],
            },
        }),
        sveltekit(),
        SvelteKitPWA(),
    ],
});
