<script>
  const preguntas = [
    {
      pregunta: "What if I need more time after the free trial?",
      respuesta:
        "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
    {
      pregunta: "What if I need more time after the free trial?",
      respuesta:
        "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
    {
      pregunta: "What if I need more time after the free trial?",
      respuesta:
        "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
    {
      pregunta: "What if I need more time after the free trial?",
      respuesta:
        "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
  ];
</script>

<section class="py-16 lg:py-24">
  <div
    class="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[530px] mx-auto"
  >
    <div class="mx-auto max-w-2xl lg:text-center px-3 relative">
      <h2
        class="section-h2 leading-[4rem] -mb-5 max-[400px]:-mb-8 text-indigo-600 uppercase text-[75px] max-[400px]:text-[55px] font-extrabold	z-0"
      >
        FAQ<span class="lowercase">s</span>
      </h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight dark:text-indigo-50 text-gray-900 sm:text-4xl z-10"
      >
        Preguntas frecuentes
      </p>
      <p class="mt-6 text-lg leading-8 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
        maximus.
      </p>
    </div>

    <div class="px-3 mt-16 sm:mt-20 lg:mt-24">
      {#each preguntas as pregunta}
        <details class="py-8 border-t-2">
          <summary
            class="cursor-pointer font-semibold text-lg dark:text-white text-gray-900 flex justify-between"
            ><h3>{pregunta.pregunta}</h3></summary
          >
          <p class="mt-8">{pregunta.respuesta}</p>
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
