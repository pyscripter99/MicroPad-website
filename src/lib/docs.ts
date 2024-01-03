export type DocItem = {
    title: string;
    url: string;
    defaultItem: string;
    folder: boolean;
    children: DocItem[];
    expanded: boolean;
};

export function pathToUrl(filePath: string): string {
    const prefixToRemove = "/src/routes/docs/";

    // Check if the path starts with the specified prefix
    if (filePath.startsWith(prefixToRemove)) {
        // Remove the prefix
        const pathWithoutPrefix = filePath.slice(prefixToRemove.length);

        // Remove the filename and extension
        const pathWithoutExtension = pathWithoutPrefix.replace(
            /\+page\.svx$/,
            ""
        );

        // Convert to URL format
        const url = "/docs/" + pathWithoutExtension.replace(/\+/g, "/");

        return url;
    }

    // If the prefix is not found, return the original path
    return filePath;
}

export function getDocItems(): DocItem[] {
    const paths = import.meta.glob("/src/routes/docs/**/*+page.svx", {
        eager: true,
    });

    let docItems: DocItem[] = [];

    for (const docItem in paths) {
        const file = paths[docItem];
        const url = pathToUrl(docItem);

        if (file && typeof file === "object" && "metadata" in file && url) {
            const metadata = file.metadata as Omit<DocItem, "url">;
            const docItem = { ...metadata, url } satisfies DocItem;
            if (docItem.folder) {
                docItem.children = [];
            }
            let folders = docItems.filter(
                (v) => v.folder && docItem.url.startsWith(v.url)
            );
            if (folders.length == 0) {
                docItems.push(docItem);
            } else {
                folders.forEach((v) => {
                    v.children.push(docItem);
                });
            }
        }
    }

    return docItems;
}
