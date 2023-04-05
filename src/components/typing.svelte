<script>
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    


   
    const words = ['palabras clave', 'web performance', 'SEO Local', 'estrategia', 'etiquetados', 'datos estructurados', 'indexabilidad']
    let wordIndex = 0
    $: word = words[wordIndex]
    
    
    let typedToIndex = 0
    /**
     * @type {any}
     */
    let typingTimeout = null


  $: typedWord = word.slice(0, typedToIndex)

    const handleTypingPhase = () =>{
       
        typingTimeout = setTimeout (() =>{
            if(typedToIndex +1 <= word.length){
                typedToIndex++
                handleTypingPhase()
            }else {
                phase = 'pausing'
                handlePausigPhase()
            }
        }, 300) 
    }

    const handlePausigPhase = () =>{
        
        typingTimeout = setTimeout (() =>{
            phase= 'deleting'
            handleDeletingPhase()
        }, 1000) 
    }

    
    const handleDeletingPhase = () =>{
        
        typingTimeout = setTimeout (() =>{
            if(typedToIndex > 0){
                typedToIndex--
                handleDeletingPhase()
            }else {
                phase = 'typing'
                wordIndex = wordIndex + 1 < words.length ? wordIndex + 1 : 0
                handleTypingPhase()
            }
        }, 200) 
    }


    let phase = 'typing'
    

    onMount(() => {
        if (!browser) return
        handleTypingPhase()

        return () => {
            if(typingTimeout){
                clearTimeout(typingTimeout)
            }
        }
    })

</script>

<span class="after:ml-1 after:content-['|'] after:animate-blinking">{typedWord}</span>