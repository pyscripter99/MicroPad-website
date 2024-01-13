<script>
    import { afterNavigate } from "$app/navigation";
    import CopyButton from "$lib/components/CopyButton.svelte";
    import { afterUpdate, createRoot, onMount } from "svelte";
    import "../app.css";
    import "@unocss/reset/tailwind.css";
    import "virtual:uno.css";
    import Navbar from "$lib/components/Navbar.svelte";

    function addCopyButtons() {
        for (const node of document.querySelectorAll("pre > code")) {
            let textContent = node.textContent ?? "";
            createRoot(CopyButton, {
                target: node,
                props: {
                    content: textContent,
                },
            });
        }
    }

    onMount(addCopyButtons);
    afterNavigate(addCopyButtons);
</script>

<Navbar />
<slot />
