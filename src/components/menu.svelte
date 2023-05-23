<script>
    import { writable } from "svelte/store";
    import { browser } from "$app/environment";
    import logoJPG from "$lib/images/seo-agency-logo.png";
    import logoAVIF from "$lib/images/seo-agency-logo.avif";
    import logoWhiteJPG from "$lib/images/seo-agency-logo-white.png";
    import logoWhiteAVIF from "$lib/images/seo-agency-logo-white.avif";
    import moon from "$lib/images/moon.png";
    import sun from "$lib/images/sun.png";
    import Hamburguer from "./hamburguer.svelte";
    import ServiciosDropdow from "./servicios-dropdown-menu.svelte";
    import SolucionesDropdow from "./soluciones-dropdown-menu.svelte";

    export const theme = writable({
        theme: "",
    });
    const menu = [
        "Posicionamiento Web",
        "Consultores SEO",
        "Servicios +",
        "Soluciones +",
    ];

    let displayDropdownServicios = false;
    let displayDropdownSoluciones = false;

    let darkMode = false;
    // @ts-ignore

    const chageTheme = () => {
        darkMode = !darkMode;

        localStorage.setItem("theme", darkMode ? "dark" : "light");

        darkMode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    };

    if (browser) {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            darkMode = true;
        } else {
            document.documentElement.classList.remove("dark");
            darkMode = false;
        }
        
    }   
</script>

<div class="w-full xl:px-20 lg:px-10 px-5 flex items-center">
    <div class="z-[99] w-full lg:max-w-[250px] xl:max-w-[330px]">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">
            {#if !darkMode}
                <picture>
                    <source srcset={logoAVIF} type="image/avif" />
                    <img
                        class="w-[11rem] dark:ag max-w-[100%] block"
                        src={logoJPG}
                        alt="logo"
                        loading="lazy"
                    />
                </picture>
            {:else if darkMode}
                <picture>
                    <source srcset={logoWhiteAVIF} type="image/avif" />
                    <img
                        class="w-[11rem] dark:ag max-w-[100%] block"
                        src={logoWhiteJPG}
                        alt="logo"
                        loading="lazy"
                    />
                </picture>
            {/if}
        </a>
    </div>
    <div class="w-full lg:flex auto flex-start hidden">
        <div class="self-center w-full">
            <nav>
                <ul
                    class="flex gap-8 w-full navbar a5 ax a9 am ay az lg:aA lg:as lg:aB lg:aC"
                >
                    {#each menu as item}
                        {#if item != "Servicios +" && item != "Soluciones +"}
                            <li><a class="font-semibold tracking-wide menu-link hover:text-indigo-500" href="/">{item}</a></li>
                        {/if}

                        {#if item == "Servicios +"}
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <li>
                                <a
                                    on:click={() =>
                                        (displayDropdownServicios =
                                            !displayDropdownServicios)}
                                    class="cursor-pointer font-semibold tracking-wide menu-link menu-dropdown hover:text-indigo-500"
                                   
                                    >{item}
                                    <ServiciosDropdow
                                        dropdownDisplay={displayDropdownServicios
                                            ? "display-dropdown__true"
                                            : ""}
                                    />
                                </a>
                            </li>
                        {:else if item == "Soluciones +"}
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                           <!--  <li>
                               
                                <a
                                    on:click={() =>
                                        (displayDropdownSoluciones =
                                            !displayDropdownSoluciones)}
                                    class="cursor-pointer font-semibold tracking-wide menu-link menu-dropdown hover:text-indigo-500"
                                    
                                    >{item}
                                    <SolucionesDropdow
                                        dropdownDisplay={displayDropdownSoluciones
                                            ? "display-dropdown__true"
                                            : ""}
                                    />
                                </a>
                            </li> -->
                        {/if} 
                    {/each}
                </ul>
            </nav>
        </div>
        <div class="a1 a10 a3 a5 a4 a9 a11 a12 a13 ao lg:aq lg:a14 lg:aw lg:au">
            <a
                href="#contact-section"
                class="text-white bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md a4 a15 aS a16 a17 a18 az aE aI hover:a19 lg:a14"
            >
                Contacto
            </a>
        </div>
    </div>
    <div class="z-[99] pl-8 a1 a1a/2 a1b ak a5 a1c/2 a9 lg:aq lg:a1d">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a id="changeTheme" on:click={chageTheme} href="#">
            {#if !darkMode}
                <img class="w-7 block max-w-none" src={moon} alt="dark mode" />
            {:else if darkMode}
                <img class="w-7 block max-w-none" src={sun} alt="ligth mode" />
            {/if}
        </a>
    </div>

    <Hamburguer />
</div>
