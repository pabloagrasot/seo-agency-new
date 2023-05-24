<script>
    import MenuHome from "./menu-home.svelte";

    /**
     * @type {number}
     */
    let y;
</script>

<svelte:window bind:scrollY={y} />

{#if y < 50}
    <header class="w-full py-5 absolute top-0 left-0">
        <MenuHome />
    </header>
{:else}
    <header
        class="sticky-menu lg:fixed lg:bg-white/[.08] lg:dark:bg-slate-900/100 lg:top-0 lg:left-0 lg:w-full lg:py-5 lg:z-50"
    >
        <MenuHome />
    </header>
{/if}

<style>
    @media (min-width: 1024px) {
        .sticky-menu {
            backdrop-filter: blur(5px);
            box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%);
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }
    }
</style>
