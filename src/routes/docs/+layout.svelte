<script>
    import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<div class="flex flex-row w-full">
    <Sidebar></Sidebar>
    <article class="prose text-ctp-text prose-zinc prose-invert m-10">
        <slot />
    </article>
</div>
