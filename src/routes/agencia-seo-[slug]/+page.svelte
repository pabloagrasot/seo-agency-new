
<script>
  import Equipo from '../../components/equipo.svelte';
  import Header from '../../components/header.svelte';
	// @ts-ignore
	import Hero from '../../components/hero-home.svelte';
  import HomeSectionServices from '../../components/home-section-services.svelte';
  import Ventajas from '../../components/ventajas.svelte';
  import Logos from "../../components/logos.svelte";
  import Faqs from '../../components/faqs.svelte';
  import Contacto from '../../components/contacto.svelte';
  import Footer from '../../components/footer.svelte';
  
  /** @type {import('./$types').PageData} */
  export let data;

</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<Header />
<Hero h1={data.h1} textoHeader={data.textoHeader}/>
<HomeSectionServices 
  serviciosHeading={data.serviciosHeading} 
  serviciosText={data.serviciosText} 
  auditoria={data.auditoria}
  consultoria={data.consultoria}
  local={data.local}
  acompañamiento={data.acompañamiento}
  migracion={data.migracion}
  contenidos={data.contenidos} />
<Ventajas 
ventajasHeading={data.ventajasHeading}
ventajasText={data.ventajasText}
objetivos={data.objetivos}
metodologias={data.metodologias}
seguimiento={data.seguimiento}
/>
<Equipo nosotrosHeading={data.nosotrosHeading} nosotrosText={data.nosotrosText}/>
<Faqs preguntasText={data.preguntasText} preguntas={data.preguntas}/>
<Logos />
<Contacto />
<Footer />
