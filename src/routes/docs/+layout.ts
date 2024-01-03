import { generateContextItems, getDocItems } from "$lib/docs";
import type { LayoutLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ url }) => {
    const docItems = getDocItems();

    if (url.pathname == "/docs/") {
        throw redirect(302, "/docs/quickstart/install/");
    }
    docItems.forEach((v) => {
        if (v.url == url.pathname && v.folder) {
            throw redirect(302, v.url.replace(/\/$/, "") + v.defaultItem);
        }

        // console.log(generateContextItems(v.path));
    });
    return {};
}) satisfies LayoutLoad;
