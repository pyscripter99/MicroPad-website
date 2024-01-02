<script lang="ts">
    export let icon: string;
    export let iconColor: string;
    export let title: HTMLElement | string;
    export let body: HTMLElement | string;
</script>

<div
    class="grid gap-5 text-center p-5 h-fit max-w-md hover:bg-ctp-mantle rounded-xl transition-all duration-100 group"
>
    <div
        class="p-4 bg-ctp-mantle group-hover:bg-ctp-base rounded-full shadow-md w-fit h-fit mx-auto transition-all duration-100"
    >
        <div class={`${icon} text-7xl ${iconColor}`}></div>
    </div>
    <div class="grid gap-3">
        <h2 class="text-3xl font-bold">{title}</h2>
        <p class="text-lg">{body}</p>
    </div>
</div>
