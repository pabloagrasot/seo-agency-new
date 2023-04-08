<script>
    import logoJPG from "$lib/images/seo-agency-logo.png";
    import logoAVIF from "$lib/images/seo-agency-logo.avif";
    import logoWhiteJPG from "$lib/images/seo-agency-logo-white.png";
    import logoWhiteAVIF from "$lib/images/seo-agency-logo-white.avif";
    import { browser } from "$app/environment";
    

    $:darkMode = false

    if (browser) {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            darkMode = true;
        } else {

            darkMode = false;
        } 
    }

</script>
<section class="pt-16 lg:pt-24 pb-8">
    <div class="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[530px] mx-auto">
        <div class="px-3 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16 border-b border-gray-200 p-12">
            <div>
                <a href="7">
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

            <div class="flex flex-col">
                <h2 class="text-lg mb-6 text-slate-800 dark:text-indigo-50">SEO Agency</h2>
                 <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">Home</a>
                 <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">Posicionamiento web</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">Consultores SEO</a>
                 <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">Contacto</a>
            </div>

            <div class="flex flex-col">
                <h2 class="text-lg mb-6 text-slate-800 dark:text-indigo-50">Servicios</h2>
                 <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">Auditoría SEO</a>
                 <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">Consultoría SEO</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">SEO local</a>
                 <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">Acompañamiento al Rediseño</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">Migración de URLs</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">Contenido SEO</a>
            </div>


            <div class="flex flex-col">
                <h2 class="text-lg mb-6 text-slate-800 dark:text-indigo-50">Soluciones</h2>
                 <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">SEO para Pymes</a>
                 <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">SEO para empresas</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">SEO para Star Up</a>
                 <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">SEO para autónomos</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">SEO para Medios</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">SEO para Abogados</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">SEO para inmobiliarias</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="my-2 hover:text-indigo-500" href="#">SEO para fotógrafos</a>
            </div>
        </div>


        <div class="flex flex-wrap justify-between mt-3">
            <div class="mx-auto lg:mx-0 max-[425px]:flex max-[425px]:flex-col">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="text-center " href="#">Política de cookies</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="text-center ml-6 max-[425px]:ml-0" href="#">Política de privacidad</a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="text-center ml-6 max-[425px]:ml-0" href="#">Aviso legal</a>
            </div>
        
            <div class="mx-auto lg:mx-0 mt-3 lg:mt-0">
                <p class="text-center">© 2025 SEO Agency. Todos los derechos reservados</p>
            </div>
        </div>
        
    </div>
</section>