<script>
// @ts-nocheck
</script>

<form method="post" action="?/contactus" class="px-3 max-w-[780px] mx-auto mt-32">
  <div class="space-y-12">
      <div class="border-b focus:border-b focus:border-slate-800 dark:focus:border-indigo-50 focus:caret-slate-800 dark:focus:caret-indigo-50 border-gray-900/10 pb-12">
  
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="name" class="block text-base text-slate-800 dark:text-indigo-50 font-medium mb-3">Nombre completo</label>
            <div>
              <input required type="text" placeholder="Nombre y apellido" name="name" id="name" autocomplete="given-name" class="block w-full py-5 ring-0 focus:ring-0 border-0 focus:border-0 border-b focus:border-b focus:border-slate-800 dark:focus:border-indigo-50 focus:caret-slate-800 dark:focus:caret-indigo-50 text-slate-800 dark:text-indigo-50 text-base bg-transparent px-0">
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="email" class="block text-base text-slate-800 dark:text-indigo-50 font-medium mb-3">Email</label>
            <div>
              <input required id="email" placeholder="Email" name="email" type="email" autocomplete="email" class="block w-full py-5 ring-0 focus:ring-0 border-0 focus:border-0 border-b focus:border-b focus:border-slate-800 dark:focus:border-indigo-50 focus:caret-slate-800 dark:focus:caret-indigo-50 text-slate-800 dark:text-indigo-50 text-base bg-transparent px-0">
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="phone" class="block text-base text-slate-800 dark:text-indigo-50 font-medium mb-3">Teléfono (opcional)</label>
            <div>
              <input id="phone" placeholder="Número de teléfono" name="phone" type="tel" autocomplete="tel" class="block w-full py-5 ring-0 focus:ring-0 border-0 focus:border-0 border-b focus:border-b focus:border-slate-800 dark:focus:border-indigo-50 focus:caret-slate-800 dark:focus:caret-indigo-50 text-slate-800 dark:text-indigo-50 text-base bg-transparent px-0 ">
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="subjet" class="block text-base text-slate-800 dark:text-indigo-50 font-medium mb-3">Asunto</label>
            <div>
              <input required id="subjet" placeholder="Asunto del mensaje" name="subjet" type="text" class="block w-full py-5 ring-0 focus:ring-0 border-0 focus:border-0 border-b focus:border-b focus:border-slate-800 dark:focus:border-indigo-50 focus:caret-slate-800 dark:focus:caret-indigo-50 text-slate-800 dark:text-indigo-50 text-base bg-transparent px-0">
            </div>
          </div>


          <div class="col-span-full">
            <label for="message" class="block text-base text-slate-800 dark:text-indigo-50 font-medium mb-3">Mensaje</label>
            <div>
              <textarea required rows=4 placeholder="Escribe el mensaje" name="message" id="message" autocomplete="message" class="block w-full py-5 resize-none	ring-0 focus:ring-0 border-0 focus:border-0 border-b focus:border-b focus:border-slate-800 dark:focus:border-indigo-50 focus:caret-slate-800 dark:focus:caret-indigo-50 text-slate-800 dark:text-indigo-50 text-base bg-transparent px-0"></textarea>
            </div>
          </div>

          <div class="col-span-full flex items-center">
            <label for="supportCheckbox" class="block  font-medium">
              <div>
                <input required type="checkbox" id="supportCheckbox" class="ring-0 focus:ring-0 h-5 w-5 rounded checked:text-indigo-600">
              </div>
            </label>

            <div class=" ml-6">
              <p>He leído y acepto la política de privacidad</p>
            </div>
          
          </div>

        </div>
      </div>
  
    </div>
  
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="submit" class="text-white bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md w-full mx-auto">Enviar</button>
    </div>
  </form>
  