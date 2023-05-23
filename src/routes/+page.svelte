
<script>
  import Equipo from '../components/equipo.svelte';
  import Header from '../components/header.svelte';
	// @ts-ignore
	import Hero from '../components/hero-home.svelte';
  import HomeSectionServices from '../components/home-section-services.svelte';
  import Ventajas from '../components/ventajas.svelte';
  import Logos from "../components/logos.svelte";
  import Faqs from '../components/faqs.svelte';
  import Contacto from '../components/contacto.svelte';
  import Footer from '../components/footer.svelte';
		
</script>

<Header />
<section class="py-16 lg:py-24">
  <div class="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[530px] mx-auto" >
    <div class="mx-auto max-w-2xl lg:text-center px-3 relative">
      <h1><a href="/agencia-seo-madrid">Agencia SEO Madrid</a></h1>
    </div>
  </div>
</section>

<Logos />
<Contacto />
<Footer />
