<script>
// @ts-nocheck

  import metodologiaJPG from "$lib/images/metodologia.jpg";
  import metodologiaAVIF from "$lib/images/metodologia.avif";

  
  import objetivosJPG from "$lib/images/objetivos.jpg";
  import objetivosAVIF from "$lib/images/objetivos.avif";

  import seguimientoJPG from "$lib/images/seguimiento.jpg";
  import seguimientoAVIF from "$lib/images/seguimiento.avif";

  $: displayObjetivos = true;
  $: displayMetodologia = false;
  $: displaySeguimiento = false;

  let border = "border-b-indigo-600"
  let fotoJPG = objetivosJPG
  let fotoAVIF = objetivosAVIF

  const handleDisplayObjetivos = () =>{
        displayObjetivos = true;
        displayMetodologia =false;
        displaySeguimiento = false;
        border = "border-b-indigo-600"
        fotoJPG = objetivosJPG
        fotoAVIF = objetivosAVIF
       
  }

  const handleDisplayMetodologias = () =>{
        displayObjetivos = false;
        displayMetodologia = true;
        displaySeguimiento =false;
        border = ""
        fotoJPG = metodologiaJPG
        fotoAVIF = metodologiaAVIF
  }

  const handleDisplaySeguimiento = () =>{
        displayObjetivos = false;
        displayMetodologia = false;
        displaySeguimiento = true;
        border = ""
        fotoJPG = seguimientoJPG
        fotoAVIF = seguimientoAVIF
        
  }

export let ventajasHeading
export let ventajasText
export let objetivos
export let metodologias
export let seguimiento

</script>

<section id="ventajas" class="py-16 lg:py-20">
  <div
    class="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[530px] mx-auto"
  >
    <div class="mx-auto max-w-2xl lg:text-center px-3 relative">
      <h2
        class="section-h2 leading-[4rem] -mb-5 max-[400px]:-mb-8 text-center text-indigo-600 uppercase text-[75px] max-[400px]:text-[55px] font-extrabold	z-0"
      >
        Ventajas
      </h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-center dark:text-indigo-50 text-gray-900 sm:text-4xl z-10"
      >
        {ventajasHeading}
      </p>
      <p class="mt-6 text-lg leading-8 ">
        {ventajasText}
      </p>
    </div>

    <div
      class="flex items-center justify-around w-full mx-auto mt-16 sm:mt-20 lg:mt-24 px-3"
    >
      <button
        on:click={() => handleDisplayObjetivos()}
        class="font-semibold text-lg border-b-2 pb-6 px-2 {border} hover:border-b-indigo-600 active:border-b-indigo-600 focus:border-b-indigo-600 w-full dark:text-white text-gray-900"
        >Objetivos</button
      >
      <button
      on:click={() => handleDisplayMetodologias()}
        class="font-semibold text-lg border-b-2 pb-6 px-2 hover:border-b-indigo-600 active:border-b-indigo-600 focus:border-b-indigo-600 w-full dark:text-white text-gray-900"
        >Metodología</button
      >
      <button
        on:click={() => handleDisplaySeguimiento()}
        class="font-semibold text-lg border-b-2 pb-6 px-2 hover:border-b-indigo-600 active:border-b-indigo-600 focus:border-b-indigo-600 w-full dark:text-white text-gray-900"
        >Seguimiento</button
      >
    </div>

    <div class="flex flex-wrap items-center mt-8 bg-gradient-to-br from-slate-400/[0.2] to-indigo-400/[0.1] dark:from-slate-900/[0.2] dark:to-indigo-900/[0.1]">
      <div class="w-full lg:w-6/12 px-3 mt-6">
        <div class="relative w-full h-[560px] md:pb-2">
          <div class="absolute bottom-1/2 lg:left-0	translate-y-1/2	">
            <picture>
              <source src={fotoAVIF} type="image/avif" />
              <img class="relative bottom-0 left-0 z-20" src={fotoJPG} alt="poscionamiento SEO" />
            </picture>
            <div
              class="transparent-box bg-white/[0.1] w-full h-full absolute md:-right-5 -top-5 z-10"
            />
          </div>
        </div>
      </div>

      <div class="w-full lg:w-6/12 px-3">



        {#if displayObjetivos === true}


        <div
          class="md:max-w-[530px] text-left lg:ml-0 lg:mr-auto max-[440px]:-mt-8 mt-16 lg:mt-0 lg:px-4 xl:px-0"
        >
          <h3
            class="mb-5	text-[2.5rem] md:text-[50px] text-slate-800 font-bold leading-none dark:text-indigo-50"
          >
            Objetivos
          </h3>
          <p class="mb-12	">
            {objetivos}
          </p>
        </div>


        {:else if displayMetodologia === true }
        <div
          class="md:max-w-[530px] text-left lg:ml-0 lg:mr-auto max-[440px]:-mt-16 mt-16 lg:mt-0 lg:px-4 xl:px-0"
        >
          <h3
            class="mb-5	text-[2.5rem] md:text-[50px] text-slate-800 font-bold leading-none dark:text-indigo-50"
          >
            Metodología
          </h3>
          <p class="mb-12	">
            {metodologias}
          </p>
        </div>





        {:else if displaySeguimiento === true }
        <div
          class="md:max-w-[530px] text-left lg:ml-0 lg:mr-auto max-[440px]:-mt-16 mt-16 lg:mt-0 lg:px-4 xl:px-0"
        >
          <h3
            class="mb-5	text-[2.5rem] md:text-[50px] text-slate-800 font-bold leading-none dark:text-indigo-50"
          >
            Seguimiento
          </h3>
          <p class="mb-12	">
            {seguimiento}
          </p>
        </div>

        {/if}


      </div>
    </div>
  </div>
</section>

<style>
      .transparent-box{
        backdrop-filter: blur(6px)
    }
</style>