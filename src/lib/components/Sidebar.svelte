<script lang="ts">
    import { getDocItems } from "$lib/docs";

    const docItems = getDocItems();
</script>

<div class="flex flex-col gap-2 h-full p-6 w-xs">
    {#each docItems as item}
        {#if item.folder}
            <div>
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
            </div>
        {:else}
            <p>{item.title}</p>
        {/if}
    {/each}
</div>
