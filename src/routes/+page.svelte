<script>
    import Footer from "$lib/components/Footer.svelte";
    import IconCard from "$lib/components/IconCard.svelte";
</script>

<div
    class="flex flex-col gap-6 p-10 items-center justify-center bg-ctp-mantle rounded-xl m-4"
>
    <h1 class="text-5xl font-bold">MicroPad</h1>
    <p class="text-lg">Simple, hackable text editor written in Go</p>
    <div class="flex flex-row gap-2">
        <a
            href="/docs/quickstart/install/"
            class="py-3 px-5 rounded-xl bg-ctp-green text-ctp-base group flex flex-row items-center"
            >Let's go
            <div
                class="i-mdi-arrow-forward group-hover:translate-x-1 mx-1 transition-all duration-150"
            ></div>
        </a>
        <a href="/docs/" class="py-3 px-5 rounded-xl bg-ctp-">Docs</a>
    </div>
</div>

<div class="md:grid-cols-2 lg:grid-cols-3 grid m-4">
    <IconCard
        icon="i-ph-smiley"
        iconColor="text-ctp-green"
        title="Ready to go"
        body="A reasonable default configuration to get you started right away."
    ></IconCard>
    <IconCard
        icon="i-file-icons-lua"
        iconColor="text-ctp-blue"
        title="Hackable with Lua"
        body="Configuration and plugins are written in lua."
    ></IconCard>
    <IconCard
        icon="i-ph-linux-logo-light"
        iconColor="text-ctp-text"
        title="Runs anywhere"
        body="Runs anywhere a go binary can, with zero external dependencies."
    ></IconCard>
    <IconCard
        icon="i-mdi-palette-swatch-outline"
        iconColor="text-ctp-red"
        title="Themes"
        body="Get your favorite themes, from inside MicroPad and the community."
    ></IconCard>
    <IconCard
        icon="i-mdi-github"
        iconColor="text-ctp-text"
        title="Open Source"
        body="Free and open source forever, leveraging the community to build something great."
    ></IconCard>
    <IconCard
        icon="i-material-symbols-speed-outline"
        iconColor="text-ctp-peach"
        title="Fast"
        body="Written in pure Go for simplicity, speed and minimal build time."
    ></IconCard>
</div>

<Footer></Footer>
