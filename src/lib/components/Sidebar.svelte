<script lang="ts">
    import { onNavigate } from "$app/navigation";
    import { getDocItems } from "$lib/docs";
    import { onMount } from "svelte";

    let docItems = $state(getDocItems());

    let pathname = $state("");

    onNavigate(() => {
        pathname = window.location.pathname;
    });

    onMount(() => {
        docItems.forEach((v) => {
            pathname = window.location.pathname;
            if (pathname.startsWith(v.url) && v.folder) {
                v.expanded = true;
            }
        });
    });
</script>

{#snippet docLink(item)}

    <a
        class="font-medium ml-4 hover:text-ctp-green"
        class:text-ctp-green={item.url == pathname}
        href={item.url}
    >
        <span>{item.title}</span>
    </a>

{/snippet}

<div class="flex flex-col gap-2 h-full p-6 w-xs">
    {#each docItems as item}
        {#if item.folder}
            <div class="flex flex-col gap-2">
                <button
                    class="bg-ctp-mantle rounded-xl p-2 hover:bg-ctp-crust transition-all duration-150 flex flex-row items-center w-full font-medium"
                    on:click={() => {
                        item.expanded = !item.expanded;
                    }}
                >
                    <span>{item.title}</span>
                    <div class="bg-ctp-base w-fit h-fit rounded-full ml-auto">
                        <div
                            class="i-material-symbols:chevron-right-rounded text-3xl p-2 transition-all duration-150"
                            class:rotate-90={item.expanded}
                            class:text-ctp-green={item.expanded}
                        ></div>
                    </div>
                </button>
                {#if item.expanded}
                <div
                    class="border-l ml-4 border-zinc-700 flex flex-col gap-2"
                    >
                    {#each item.children as child}
                      {@render docLink(child)}
                    {/each}
                </div>
                {/if}
            </div>
        {:else}
            {@render docLink(item)}
        {/if}
    {/each}
</div>
