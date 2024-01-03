import { docItems } from "$lib/docs";
import { onMount } from "svelte";
import type { LayoutLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ url }) => {
    if (url.pathname == "/docs/") {
        throw redirect(302, "/docs/quickstart/install/");
    }
    docItems.forEach((v) => {
        if (v.url == url.pathname && v.folder) {
            throw redirect(302, v.url.replace(/\/$/, "") + v.defaultItem);
        }
    });
    return {};
}) satisfies LayoutLoad;
