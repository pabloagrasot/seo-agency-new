<script>
// @ts-nocheck

  // @ts-ignore
  export let preguntasText


   export let preguntas
</script>

<section id="faqs" class="py-16 lg:py-24">
  <div
    class="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[530px] mx-auto"
  >
    <div class="mx-auto max-w-2xl lg:text-center px-3 relative">
      <h2
        class="section-h2 leading-[4rem] -mb-5 max-[400px]:-mb-8 text-center text-indigo-600 uppercase text-[75px] max-[400px]:text-[55px] font-extrabold	z-0"
      >
        FAQ<span class="lowercase">s</span>
      </h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-center dark:text-indigo-50 text-gray-900 sm:text-4xl z-10"
      >
        Preguntas frecuentes
      </p>
      <p class="mt-6 text-lg leading-8 ">
        {preguntasText}
      </p>
    </div>

    <div class="px-3 mt-16 sm:mt-20 lg:mt-24">
      {#each preguntas as pregunta}
        <details class="py-8 border-t-2">
          <summary
            class="cursor-pointer font-semibold text-lg dark:text-white text-gray-900 flex justify-between"
            ><h3>{pregunta.pregunta}</h3></summary
          >
          <div class="mt-8">
            {#each pregunta.respuesta as parrafos}
            <p class="mb-4">{parrafos}</p>
            {/each}
          </div>
        </details>
      {/each}
    </div>
  </div>
</section>

<style>
  details[open] > summary::after {
    content: "-";
  }

  details > summary::after {
    content: "+";
    font-size: 1.5rem;
  }
</style>
