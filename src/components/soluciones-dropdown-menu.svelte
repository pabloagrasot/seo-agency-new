<script>

     /**
	 * @type {string}
	 */
      export let dropdownDisplay
    let servicios = ['SEO para Pymes','SEO para empresas', 'SEO para Star Up', 'SEO para autónomos', 'SEO para Medios', 'SEO para Abogados', 'SEO para inmobiliarias', 'SEO para fotógrafos']
</script>

<div class="bg-white dark:bg-slate-900/100 lg:dark:bg-slate-800 {dropdownDisplay}">
    {#each servicios as item}
        <a href="/">{item}</a>
    {/each}
</div>

<style>
    	div {
  display: none;
  position: absolute;
  top: 5.3rem;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  border-radius: 0.5rem;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;
}

a:hover{
  color: #189ab4;
}


div.display-dropdown__true {
    display: flex;
}

@media (max-width: 1100px) {
  div.display-dropdown__true {
			position: static;
      box-shadow: none;
      padding: 0.5rem 1rem;
      align-items: center;
    justify-content: center;
    width: 50vw;
    margin: 0 auto;
		}
	}
</style>