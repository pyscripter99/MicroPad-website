<script lang="ts">
    export let content: string;

    let copied: boolean = false;

    function copy() {
        if (copied) {
            return;
        }

        navigator.clipboard.writeText(content);
        copied = true;
        setTimeout(() => {
            copied = false;
        }, 2000);
    }
</script>

<div class="absolute top-1rem right-1rem">
    <div class="flex flex-row items-center">
        {#if copied}
            <div class="flex flex-row items-center">
                <div class="mr-0.5 bg-zinc-700 p-1.5 text-sm rounded-lg">
                    Copied!
                </div>
                <span
                    class="text-2xl text-zinc-700 translate-x--1.2 translate-y--8%"
                    >▶</span
                >
            </div>
        {/if}
        <button
            class={`text-2xl ${
                copied
                    ? "text-ctp-green border-ctp-green"
                    : "text-zinc-400 border-transparent"
            } hover:text-ctp-green transition-all duration-100 p-1 hover:bg-ctp-base rounded-md border border-1.5 hover:border-ctp-green`}
            on:click={copy}
            >{#if copied}
                <div class="i-material-symbols:check-small-rounded"></div>
            {:else}
                <div
                    class="i-material-symbols:content-copy-outline-rounded"
                ></div>
            {/if}
        </button>
    </div>
</div>
