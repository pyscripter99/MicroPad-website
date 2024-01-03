import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import * as fs from "node:fs";

import { escapeSvelte, mdsvex } from "mdsvex";
import shiki from "shiki";

import remarkHeadingId from "remark-heading-id";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    extensions: [".svelte", ".svx", ".md"],
    preprocess: [
        vitePreprocess({}),
        mdsvex({
            extensions: [".md", ".svx"],
            highlight: {
                highlighter: async (code, lang = "text") => {
                    const highlighter = await shiki.getHighlighter({
                        theme: JSON.parse(
                            fs.readFileSync("./mocha.json", "utf-8")
                        ),
                    });
                    const html = escapeSvelte(
                        highlighter.codeToHtml(code, { lang })
                    );
                    return `{@html \`${html}\`}`;
                },
            },
            remarkPlugins: [[remarkHeadingId, { defaults: true }]],
        }),
    ],

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
    },
};

export default config;
