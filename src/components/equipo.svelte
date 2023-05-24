<script>
  import linkedln from "$lib/images/linkedin.svg";
  import quiqueJPG from "$lib/images/enrique.png";
  import quiqueAVIF from "$lib/images/enrique.avif";
  import jesusJPG from "$lib/images/jesus.png";
  import jesusAVIF from "$lib/images/jesus.avif";
  import pabloJPG from "$lib/images/pablo.png";
  import pabloAVIF from "$lib/images/pablo.avif";
  /**
     * @type {string}
     */
   export let nosotrosHeading
     /**
     * @type {string}
     */
  export let nosotrosText
  
</script>

<section id="nosotros" class="py-16 lg:py-24">
  <div
    class="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[530px] mx-auto"
  >
    <div class="mx-auto max-w-2xl lg:text-center px-3 relative">
      <h2
        class="section-h2 leading-[4rem] -mb-5 max-[400px]:-mb-8 text-center text-indigo-600 uppercase text-[75px] max-[400px]:text-[55px] font-extrabold	z-0"
      >
        Nosotros
      </h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-center dark:text-indigo-50 text-gray-900 sm:text-4xl z-10"
      >
        {nosotrosHeading}
      </p>
      <p class="mt-6 text-lg leading-8 ">
        {nosotrosText}
      </p>
    </div>

    <div class="mx-auto mt-16 sm:mt-20 lg:mt-24 px-3">
      <div
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16 my-0 mx-auto"
      >
        <div
          class="transparent-box bg-indigo-500/[0.2] dark:bg-white/[0.1] w-full px-16 py-8 rounded-md text-center flex flex-col align-center"
        >
          <picture>
            <source src={quiqueAVIF} type="image/avif" />
            <img
              class="avatar rounded-full bg-white dark:bg-slate-800 mb-8"
              src={quiqueJPG}
              alt="enrique"
            />
          </picture>
          <p class="text-gray-900 dark:text-white font-medium text-lg">
            Enrique Romero
          </p>
          <p>Especialista estratégico</p>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="mt-8 mx-auto" href="#"
            ><img src={linkedln} alt="linkedln" /></a
          >
        </div>
        <div
          class="transparent-box bg-indigo-500/[0.2] dark:bg-white/[0.1] w-full px-16 py-8 rounded-md text-center flex flex-col align-center"
        >
          <picture>
            <source src={pabloAVIF} type="image/avif" />
            <img
              class="avatar rounded-full bg-white dark:bg-slate-800 mb-8"
              src={pabloJPG}
              alt="pablo"
            />
          </picture>
          <p class="text-gray-900 dark:text-white font-medium text-lg">
            Pablo Agrasot
          </p>
          <p>Especialista de IT</p>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="mt-8 mx-auto" href="#"
            ><img src={linkedln} alt="linkedln" /></a
          >
        </div>
        <div
          class="transparent-box bg-indigo-500/[0.2] dark:bg-white/[0.1] w-full px-16 py-8 rounded-md text-center flex flex-col align-center"
        >
          <picture>
            <source src={jesusAVIF} type="image/avif" />
            <img
              class="avatar rounded-full bg-white dark:bg-slate-800 mb-8"
              src={jesusJPG}
              alt="jesus"
            />
          </picture>
          <p class="text-gray-900 dark:text-white font-medium text-lg">
            Jesús Ábalos
          </p>
          <p>Especialista SEO</p>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="mt-8 mx-auto" href="#"
            ><img src={linkedln} alt="linkedln" /></a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .avatar {
    background-image: url(/noise.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
  }
</style>
