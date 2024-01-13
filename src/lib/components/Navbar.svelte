<script>
    import Logo from "../../../static/micropad-logo.svg";

    const actions = [{ text: "Docs", link: "/docs/" }];
</script>

<div class="p-4 bg-ctp-crust flex flex-row items-center">
    <a
        href="/"
        class="flex flex-row text-2xl font-bold items-center p-2 rounded-xl hover:text-ctp-green w-max transition-all duration-150"
    >
        <Logo class="w-10 h-max text-ctp-green"></Logo>
        MicroPad
    </a>

    <div class="flex flex-row gap-4 font-bold text-xl ml-8">
        {#each actions as action}
            <a
                href={action.link}
                class="opacity-65 hover:opacity-100 transition-all duration-150"
                >{action.text}</a
            >
        {/each}
    </div>
</div>
