<script>
  import JPG from "$lib/images/hero-img.jpg";
  import AVIF from "$lib/images/hero-img.avif";

  $: displayObjetivos = true;
  $: displayMetodologia = false;
  $: displaySeguimiento = false;

  let border = "border-b-indigo-600"

  const handleDisplayObjetivos = () =>{
        displayObjetivos = true;
        displayMetodologia =false;
        displaySeguimiento = false;
        border = "border-b-indigo-600"
       
  }

  const handleDisplayMetodologias = () =>{
        displayObjetivos = false;
        displayMetodologia = true;
        displaySeguimiento =false;
        border = ""
  }

  const handleDisplaySeguimiento = () =>{
        displayObjetivos = false;
        displayMetodologia = false;
        displaySeguimiento = true;
        border = ""
        
  }

</script>

<section class="py-16 lg:py-20">
  <div
    class="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[530px] mx-auto"
  >
    <div class="mx-auto max-w-2xl lg:text-center px-3 relative">
      <h2
        class="section-h2 leading-[4rem] -mb-5 max-[400px]:-mb-8 text-indigo-600 uppercase text-[75px] max-[400px]:text-[55px] font-extrabold	z-0"
      >
        Ventajas
      </h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight dark:text-indigo-50 text-gray-900 sm:text-4xl z-10"
      >
        Everything you need to deploy your app
      </p>
      <p class="mt-6 text-lg leading-8 ">
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
        Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In
        mi viverra elit nunc.
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

    <div class="flex flex-wrap items-center">
      <div class="w-full lg:w-6/12 px-3 mt-6">
        <div class="relative w-full h-[560px] md:pb-2">
          <div class="absolute top-12 lg:top-auto lg:bottom-0 left-0">
            <picture>
              <source src={AVIF} type="image/avif" />
              <img class="relative bottom-0 left-0 z-20" src={JPG} alt="poscionamiento SEO" />
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
          class="md:max-w-[530px] text-left lg:ml-0 lg:mr-auto max-[440px]:-mt-16 mt-16 lg:mt-0 lg:px-4 xl:px-0"
        >
          <h1
            class="mb-5	text-[2.5rem] md:text-[50px] text-slate-800 font-bold leading-none dark:text-indigo-50"
          >
            Objetivos
          </h1>
          <p class="mb-12	">
            Handcrafted Tailwind CSS template for your next - Startup, Business,
            Agency or SaaS Website. Comes with refreshing design and everything
            you need to kickstart your next web project.
          </p>
        </div>


        {:else if displayMetodologia === true }
        <div
          class="md:max-w-[530px] text-left lg:ml-0 lg:mr-auto max-[440px]:-mt-16 mt-16 lg:mt-0 lg:px-4 xl:px-0"
        >
          <h1
            class="mb-5	text-[2.5rem] md:text-[50px] text-slate-800 font-bold leading-none dark:text-indigo-50"
          >
            Metodología
          </h1>
          <p class="mb-12	">
            Handcrafted Tailwind CSS template for your next - Startup, Business,
            Agency or SaaS Website. Comes with refreshing design and everything
            you need to kickstart your next web project.
          </p>
        </div>





        {:else if displaySeguimiento === true }
        <div
          class="md:max-w-[530px] text-left lg:ml-0 lg:mr-auto max-[440px]:-mt-16 mt-16 lg:mt-0 lg:px-4 xl:px-0"
        >
          <h1
            class="mb-5	text-[2.5rem] md:text-[50px] text-slate-800 font-bold leading-none dark:text-indigo-50"
          >
            Seguimiento
          </h1>
          <p class="mb-12	">
            Handcrafted Tailwind CSS template for your next - Startup, Business,
            Agency or SaaS Website. Comes with refreshing design and everything
            you need to kickstart your next web project.
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