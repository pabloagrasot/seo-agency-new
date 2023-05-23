<script>
// @ts-nocheck
  export let serviciosHeading
  export let serviciosText
  export let auditoria 
  export let consultoria
  export let local
  export let acompañamiento
  export let migracion
  export let contenidos
</script>

<section class="py-16 lg:py-20 mt-24">
    <div class="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[530px] mx-auto">
      <div class="mx-auto max-w-2xl lg:text-center px-3 relative">
        <h2 class="section-h2 leading-[4rem] -mb-5 max-[400px]:-mb-8 text-center text-indigo-600 uppercase text-[75px] max-[400px]:text-[55px] font-extrabold	z-0">Servicios</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-center dark:text-indigo-50 text-gray-900 sm:text-4xl z-10">{serviciosHeading}</p>
        <p class="mt-6 text-lg leading-8 ">{serviciosText}</p>
      </div>
      <div class="mx-auto mt-16 sm:mt-20 lg:mt-24 px-3">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 dark:text-indigo-50 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path>
                </svg>
              </div>
              Auditoría SEO
            </dt>
            <dd class="mt-2 text-base leading-7 ">{auditoria}</dd>
          </div>
  
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 dark:text-indigo-50 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
                </svg>
              </div>
              Consultoría SEO
            </dt>
            <dd class="mt-2 text-base leading-7 ">{consultoria}</dd>
          </div>
  
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 dark:text-indigo-50 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                </svg>
              </div>
              SEO Local
            </dt>
            <dd class="mt-2 text-base leading-7 ">{local}</dd>
          </div>
  
          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 dark:text-indigo-50 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"></path>
                </svg>
              </div>
              Acompañamiento al Rediseño
            </dt>
            <dd class="mt-2 text-base leading-7 ">{acompañamiento}</dd>
          </div>

          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 dark:text-indigo-50 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              Migración de URLs
            </dt>
            <dd class="mt-2 text-base leading-7 ">{migracion}</dd>
          </div>

          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 dark:text-indigo-50 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                </svg>
              </div>
              Contenidos SEO
            </dt>
            <dd class="mt-2 text-base leading-7 ">{contenidos}</dd>
          </div>


        </dl>
      </div>
    </div>
</section>