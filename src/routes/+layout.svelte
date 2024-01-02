<script>
    import { afterNavigate } from "$app/navigation";
    import CopyButton from "$lib/components/CopyButton.svelte";
    import { afterUpdate, createRoot, onMount } from "svelte";
    import "../app.css";
    import "@unocss/reset/tailwind.css";
    import "virtual:uno.css";

    onMount(() => {
        for (const node of document.querySelectorAll("pre > code")) {
            let textContent = node.textContent ?? "";
            createRoot(CopyButton, {
                target: node,
                props: {
                    content: textContent,
                },
            });
        }
    });
</script>

<slot />
