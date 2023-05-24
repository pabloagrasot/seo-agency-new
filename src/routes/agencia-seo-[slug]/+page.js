import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.slug === 'madrid') {
    return {
      title: 'Agencia de SEO en Madrid - Posicionamiento Orgánico',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
      h1: 'Agencia SEO en Madrid',
      textoHeader: '¿Cansado de no aparecer en los primeros resultados de Google? Nuestra agencia SEO en Madrid te ayuda a mejorar la visibilidad de tu marca online. Te informamos sin compromiso.',
      serviciosHeading: 'Descubre cómo podemos ayudarte con nuestros servicios especializados en SEO',
      serviciosText: 'Somos una agencia SEO en Madrid, con amplia experiencia en el sector. Ayudamos a nuestros clientes mejorando la visibilidad de sus negocios en Google y aumentar el tráfico hacia su web.',
      auditoria: 'Nuestros expertos en SEO analizarán todos los aspectos técnicos, de contenido y autoridad de tu web y te entregarán un informe detallado con recomendaciones prácticas. No esperes más y pide tu auditoría SEO hoy mismo.',
      consultoria: 'Analizamos todas las categorías del SEO (On Page, Off Page, técnico y de contenidos) y te ofrecemos un plan personalizado para optimizar tu web. No esperes más y solicita tu presupuesto sin compromiso.',
      local: '¿Quieres mejorar tu posicionamiento local y atraer más clientes a tu negocio? En nuestra agencia SEO te ofrecemos los mejores servicios de SEO Local para que tu web destaque en Google.',
      acompañamiento: '¿Necesitas rediseñar tu web y no sabes cómo hacerlo sin perder tu posicionamiento SEO? En nuestra agencia SEO en Madrid te ayudamos a definir las nuevas URLs de tu web con un estudio previo de palabras clave y una arquitectura optimizada.',
      migracion: 'En nuestra agencia SEO te ofrecemos el mejor servicio de cambio de arquitectura y redirecciones para que no pierdas tu ranking en Google. Solicita tu presupuesto sin compromiso y descubre cómo podemos ayudarte.',
      contenidos: 'En nuestra agencia SEO en Madrid te ofrecemos un servicio integral de redacción, optimización y difusión de contenidos adaptados a tu público objetivo y a las exigencias de los motores de búsqueda.',
      ventajasHeading: 'Descubre las ventajas de contar con una agencia SEO en Madrid',
      ventajasText: 'Te ayudamos a comprender los conceptos básicos del SEO aplicándolos en tu proyecto mediante acciones personalizadas según tu marca, sector y un estudio de la competencia en las SERPs.',
      objetivos: 'Nos proponemos objetivos claros y medibles para mejorar el posicionamiento de tu web en los buscadores. Hacemos que tu negocio crezca y consiga más clientes y ventas gracias a una estrategia SEO eficaz. Si quieres saber cómo podemos ayudarte, solicita una auditoría SEO gratuita y sin compromiso.',
      metodologias: 'Nuestra metodología se adapta a las necesidades de cada cliente. Realizamos un estudio y análisis previo de tu sector, competencia y público objetivo para diseñar una estrategia SEO personalizada y eficaz. ¿Quieres saber más? Contacta con nosotros y te informaremos sin compromiso.',
      seguimiento: 'No solo diseñamos y ejecutamos estrategias personalizadas para cada cliente, sino que también hacemos un seguimiento constante del proyecto para medir los resultados y optimizar el rendimiento. Si quieres saber más sobre cómo trabajamos y qué beneficios podemos aportarte, solicita una auditoría gratuita de tu web ahora mismo.',
      nosotrosHeading: 'Equipo de expertos en posicionamiento web en Madrid',
      nosotrosText: 'Descubre cómo nuestro equipo de profesionales SEO puede ayudarte a mejorar tu posicionamiento web, aumentar tu tráfico y generar más ventas.',
      preguntasText: '¿Tienes dudas sobre el SEO y cómo puede ayudarte a mejorar tu negocio? En nuestra web encontrarás las respuestas que necesitas.',
      preguntas: [
        {
          pregunta: "Aumenta el tráfico orgánico y atrae más clientes potenciales",
          respuesta: ["Somos conscientes de lo importante que es el SEO para el éxito de cualquier negocio en línea, por eso estamos aquí para ayudarte a aprovechar al máximo tu presencia online. Nuestro equipo de profesionales hace uso de técnicas SEO de vanguardia, siendo conocedor de las últimas actualizaciones del algoritmo de Google. Por ello nuestros clientes estén siempre un paso por delante de la competencia.", "Ofrecemos una amplia gama de servicios SEO, desde la investigación avanzada de palabras clave (keyword research), generación de contenidos de alta calidad y la optimización de la experiencia del usuario.", "Si necesitas mejorar el posicionamiento web de tu sitio web en los resultados de búsqueda y atraer más tráfico orgánico, ¡no dudes en contactar con nosotros! Estaremos encantados de ayudarte a alcanzar el éxito online para tu negocio.", "El posicionamiento orgánico en buscadores, también conocido como SEO (Search Engine Optimization), te ayuda a mejorar la visibilidad de tu negocio y mejorar las ventas online.", "El SEO consiste en la optimización de tu web para que sea fácilmente rastreable por los motores de búsqueda como Google. El objetivo principal del SEO es mejorar la calidad y cantidad del tráfico de un sitio web a través del posicionamiento en las SERPs (resultados orgánicos de búsqueda).", "Cuando un usuario realiza una búsqueda, Google hace uso de algoritmos para determinar qué URLs son más relevantes para esa búsqueda en particular. Estos algoritmos toman en cuenta diversos factores, como la relevancia del contenido, la calidad de la página, la experiencia del usuario y la autoridad de tu marca.", "Para mejorar el posicionamiento de tu negocio en los resultados de búsqueda, es importante asegurarse de que su contenido es relevante y útil para los usuarios. También es importante tener en cuenta la experiencia del usuario y asegurarse de que tu sitio tenga una navegación sencilla y rápido para cargar. Además, es fundamental utilizar palabras clave relevantes y estructurar su contenido y etiquetas de manera adecuada.", "El SEO puede ser una tarea desafiante, pero los resultados que te ofrece son esenciales para aumentar las conversiones de tu negocio. Un sitio web bien posicionado en los resultados de búsqueda puede atraer a más tráfico orgánico y, en última instancia, más clientes y ventas.",],
        },
        {
          pregunta: "¿Sabes cómo funciona el SEO y cómo puede mejorar tus ventas?",
          respuesta: ["Nuestra agencia SEO en Madrid te ayuda a comprender los conceptos básicos del SEO y los aplica en tu proyecto mediante acciones personalizadas según tu marca, sector y un estudio de la competencia en las SERPs. Con nuestra ayuda, comprenderás como el SEO puede mejorar su posicionamiento en los motores de búsqueda.", "Existen muchos factores que pueden afectar el posicionamiento de un sitio web en los resultados de búsqueda, como la relevancia del contenido, la calidad del sitio, la usabilidad y la experiencia del usuario. Al optimizar estos factores, es más probable que un sitio web aparezca en los primeros resultados de búsqueda y traccionar más volumen de tráfico.", "El posicionamiento web también incluye la investigación y el uso de palabras clave relevantes para tu sector profesional. Incorporar estas keywords de manera estratégica en el contenido y en las etiquetas de tu site ayuda a los motores de búsqueda a comprender mejor la temática de tu proyecto online y a clasificarlo para las búsquedas apropiadas.", 'Además, el posicionamiento web incluye la generación de enlaces de calidad desde otros sitios web hacia el suyo. Estos enlaces "externos" (Backlinks) funcionan como votos de confianza para los motores de búsqueda y pueden ayudar a mejorar el posicionamiento de su sitio.']
        },
        {
          pregunta: "Desarrollamos estrategias SEO únicas y personalizadas",
          respuesta: ["¿Cansado de seguir las mismas pautas en SEO sin obtener los resultados deseados? Nuestra agencia SEO en Madrid ofrece estrategias personalizadas para adaptarse a las necesidades específicas y objetivos del negocio. Contáctanos hoy y descubre cómo podemos ayudarte a mejorar tu visibilidad y posicionamiento en los motores de búsqueda y aumentar el tráfico orgánico con un enfoque único y personalizado.", "Una estrategia SEO (Search Engine Optimization, u Optimización para Motores de Búsqueda en español) es un plan detallado de acciones que se llevan a cabo con el objetivo de mejorar la visibilidad de una página web o URL en los resultados de búsqueda orgánicos de los motores de búsqueda.", "Una estrategia SEO incluye diversas acciones, siendo las más comunes:", "Investigar y seleccionar palabras clave relevantes para optimizar la página web.", "Optimizar los etiquetados HTML de tu web para orientarlos a las búsquedas de los usuarios y mejorar su posicionamiento en las SERPs", "Optimizar el contenido de la página web para que sea más atractivo para los motores de búsqueda.", "Mejorar la estructura y la navegación de la página web para que sea más fácil de usar y de entender para los motores de búsqueda.", "Analizar y optimizar el perfil de enlaces entrantes de la página web para mejorar su autoridad y confianza en los ojos de los motores de búsqueda.", "El objetivo final de una estrategia SEO es conseguir que la página web aparezca en los primeros resultados de búsqueda para las palabras clave relevantes, lo que puede aumentar el tráfico hacia la página y, por lo tanto, aumentar las posibilidades de conversión y generación de ingresos.", "Para desarrollar una estrategia SEO efectiva, es necesario tener un conocimiento profundo sobre cómo funcionan los motores de búsqueda y cómo se puede optimizar una página web para atraer más tráfico orgánico. También es importante estar al tanto de las últimas tendencias y actualizaciones en el mundo del SEO para poder aplicarlas de manera efectiva."]
        },
        {
          pregunta: "¿Necesitas una agencia SEO en Madrid?",
          respuesta: ["Entendemos que el mundo digital es un lugar cambiante y siempre estamos al tanto de las últimas tendencias y tecnologías para asegurarnos de que nuestros clientes estén siempre un paso adelante. Además, nuestro equipo de profesionales se dedica a proporcionar un servicio excepcional y a establecer relaciones duraderas con nuestros clientes.", "Trabajamos para comprender tus objetivos y desarrollar una estrategia SEO personalizada que se adapte a tus necesidades y las de su empresa."]
        }
      ]
    }
  }

  if (params.slug === 'barcelona') {
    return { 
     title: 'Agencia de SEO en Barcelona - Posicionamiento Orgánico',
     content: 'Welcome to our blog. Lorem ipsum dolor sit amet…',
     h1: 'Agencia SEO en Barcelona',
     textoHeader: 'Mejora tu presencia online con nuestra agencia de SEO en Barcelona. Con nuestros servicios, aumentarás tu visibilidad en los motores de búsqueda y atraerás más tráfico a tu sitio web.',
     serviciosHeading: 'Descubre cómo podemos ayudarte con nuestros servicios especializados en SEO',
     serviciosText: 'Somos una agencia SEO en Barcelona, con amplia experiencia en el sector. Ayudamos a nuestros clientes mejorando la visibilidad de sus negocios en Google y aumentar el tráfico hacia su web.',
     auditoria: 'Nuestros expertos en SEO analizarán todos los aspectos técnicos, de contenido y autoridad de tu web y te entregarán un informe detallado con recomendaciones prácticas. No esperes más y pide tu auditoría SEO hoy mismo.',
     consultoria: 'Analizamos todas las categorías del SEO (On Page, Off Page,técnico y de contenidos) y te ofrecemos un plan personalizado para optimizar tuweb. No esperes más y solicita tu presupuesto sin compromiso.',
     local: '¿Quieres mejorar tu posicionamiento local y atraer más clientes a tu negocio? En nuestra agencia SEO te ofrecemos los mejores servicios de SEO Local para que tu web destaque en Google.',
     acompañamiento: '¿Necesitas rediseñar tu web y no sabes cómo hacerlo sin perder tu posicionamiento SEO? En nuestra agencia SEO en Barcelona te ayudamos a definir las nuevas URLs de tu web con un estudio previo de palabras clave y una arquitectura optimizada.',
     migracion: 'En nuestra agencia SEO te ofrecemos el mejor servicio decambio de arquitectura y redirecciones para que no pierdas tu ranking en Google. Solicita tu presupuesto sin compromiso y descubre cómo podemos ayudarte.',
     contenidos: 'En nuestra agencia SEO en Barcelona te ofrecemos un servicio integral de redacción, optimización y difusión de contenidos adaptados a tu público objetivo y a las exigencias de los motores de búsqueda.',
     ventajasHeading: 'Descubre las ventajas de contar con una agencia SEO en Barcelona',
     ventajasText: 'Te ayudamos a comprender los conceptos básicos del SEO aplicándolos en tu proyecto mediante acciones personalizadas según tu marca, sector y un estudio de la competencia en las SERPs.',
     objetivos: 'Nos proponemos objetivos claros y medibles para mejorar elposicionamiento de tu web en los buscadores. Hacemos que tu negocio crezca yconsiga más clientes y ventas gracias a una estrategia SEO eficaz. Si quieressaber cómo podemos ayudarte, solicita una auditoría SEO gratuita y sincompromiso.',
     metodologias: 'Nuestra metodología se adapta a las necesidades de cada cliente. Realizamos un estudio y análisis previo de tu sector, competencia y público objetivo para diseñar una estrategia SEO personalizada y eficaz. ¿Quieres saber más? Contacta con nosotros y te informaremos sin compromiso.',
     seguimiento: 'No solo diseñamos y ejecutamos estrategias personalizadas para cada cliente, sino que también hacemos un seguimiento constante del proyecto para medir los resultados y optimizar el rendimiento. Si quieres saber más sobre cómo trabajamos y qué beneficios podemos aportarte, solicita una auditoría gratuita de tu web ahora mismo.', 
     nosotrosHeading: 'Equipo de expertos en posicionamiento web en Barcelona', 
     nosotrosText: 'Descubre cómo nuestro equipo de profesionales SEO puede ayudarte a mejorar tu posicionamiento web, aumentar tu tráfico y generar más ventas.', 
     preguntasText: '¿Tienes dudas sobre el SEO y cómo puede ayudarte a mejorar tu negocio? En nuestra web encontrarás las respuestas que necesitas.',
     preguntas: [
      { 
        pregunta: "Mejora tu posicionamiento en los resultados de búsqueda con el SEO", 
        respuesta: ["El SEO es una disciplina en constante evolución y requiere una inversión de tiempo y esfuerzo para tener éxito. Sin embargo, puede ser muy beneficioso para cualquier negocio que desee mejorar su visibilidad en línea y atraer más tráfico orgánico a su sitio web.", "Al realizar una búsqueda en Google, este rastrea e indexa miles de millones de URLs o páginas web para determinar qué resultados son más relevantes y útiles para el usuario. Por medio de una estrategia SEO, optimizamos tu sitio para que sea más atractivo y relevante para los motores de búsqueda y, por lo tanto, más probable que aparezca en los primeros resultados de las SERPs.", "Dominamos todas las categorías del SEO, tanto On-Page como el Off-Page. El SEO on-page hace referencia a todas las medidas que puedes tomar directamente en tu sitio web para mejorar su posicionamiento en los resultados de búsqueda. Esto incluye acciones tales como como la optimización de títulos y metadatos, la creación de contenido de calidad y relevante y la optimización de la estructura técnica del sitio. El SEO off-page, por otro lado, hace referencia a todas las medidas que puedes tomar fuera de tu sitio web para mejorar su posicionamiento, como la generación de enlaces de calidad desde otros sitios web.", "Nuestra agencia SEO en Barcelona dispone de un equipo de profesionales SEO te ayudará a mejorar tu posicionamiento en los buscadores y aumentar tu visibilidad online."] 
      }, 
      { 
        pregunta: "¿Por qué contratar una agencia SEO en Barcelona?", 
        respuesta: ["Hay varias razones por las que podrías considerar contratar nuestros servicios SEO en Barcelona. En primer lugar, el SEO es una disciplina compleja y en constante evolución, y es probable que no tengas el tiempo ni los conocimientos necesarios para dedicarle la atención que requiere. Al contratara una agencia SEO en Barcelona, puedes aprovechar su experiencia y conocimientos para mejorar la visibilidad de tu sitio web y aumentar el tráfico orgánico.", "En segundo lugar, nuestra agencia SEO en Barcelona puede ahorrarte tiempo y esfuerzo. Optimizar un sitio web para los motores de búsqueda puede ser un proceso largo y tedioso, y contratar por lo que nuestros servicios te permiten centrar tus esfuerzos en otros aspectos de tu negocio.", "Además, nuestra agencia SEO en Barcelona puede proporcionarte una perspectiva externa y objetiva sobre tu sitio web y tu estrategia de marketing en línea. Pueden ayudarte a identificar áreas de oportunidad y proporcionarte sugerencias y estrategias para mejorar el rendimiento de tu sitio.", "Contar con una agencia SEO con alta experiencia es una valiosa inversión para cualquier negocio que desee mejorar su visibilidad en línea y aumentar el tráfico orgánico a su sitio web."]
      }, 
      { 
        pregunta: "¿Por qué tu negocio en Barcelona necesitaría SEO?", 
        respuesta: ["Hay varias razones por las que tu negocio necesita contratarlos servicios de una agencia SEO en Barcelona. ", "El SEO es esencial para mejorar la visibilidad de tu sitio web en Google. Si tu sitio no está bien optimizado, es menos probable que aparezca en los primeros resultados de búsqueda, lo que significa que tu empresa podría estar perdiendo oportunidades de atraer tráfico orgánico y conseguir nuevos clientes.", "Si tienes un sitio fácil de usar y de navegar, es más probable que los visitantes se queden y exploren más contenido, lo que aumentará el posicionamiento de tu negocio en las SERPs. Además, mediante acciones de WPO, se mejora la velocidad de carga de tu sitio, lo que es importante para alcanza restos primeros puestos de Google.", "El SEO es una forma efectiva de marketing online a largo plazo. A diferencia de otras formas de publicidad, como los anuncios pagados, el SEO puede ayudar a atraer tráfico orgánico a tu sitio de manera sostenible y a un costo relativamente bajo.", "Aumentamos tu ventaja competitiva por medio de un análisis de competidores SEO. Nuestros expertos analizarán a tu sector a fondo y te proporcionarán estrategias personalizadas para mejorar tu posicionamiento en los buscadores y aumentar tu visibilidad en línea."]
      }, 
      { 
        pregunta: "Contacta hoy con nuestra agencia SEO en Barcelona", 
        respuesta: ["Aumenta la presencia de tu negocio en Google y consigue más tráfico en tu sitio web contratando a la mejor agencia SEO en Barcelona. Nuestros profesionales te ayudarán a mejorar tu posicionamiento en buscadores, aumentar tu visibilidad y atraer más tráfico cualificado a tu sitio web. ", "Mediante un estudio profundo de tu sector y una estrategia SEO personalizada, podrás aumentar tu alcance y llegar a más clientes potenciales. Además, nuestros expertos te proporcionarán una hoja de ruta que se adapta a tus necesidades y objetivos específicos. ", "No pierdas la oportunidad de mejorar tu presencia en línea y alcanzar tus metas. Contáctanos hoy mismo para obtener una consulta gratuita y ver cómo podemos ayudarte a escalar en los resultados de búsqueda y aumentar tu presencia en línea. No te conformes con menos, contrata los servicios de nuestra agencia SEO en Barcelona y aumenta tu ventaja competitiva."]
      }
      ]
    }
  }

  if (params.slug === 'a-coruna') {
    return { 
      title: "Agencia de SEO en A Coruña - Posicionamiento Orgánico", 
      content: "Welcome to our blog.Lorem ipsum dolor sit amet…", 
      h1: "Agencia SEO en A Coruña", 
      textoHeader: "Aumenta la visibilidad de tu negocio online con SEO Agency, la agencia de referencia en A Coruña. Te informamos sin compromiso.", 
      serviciosHeading: "Descubre cómo podemos ayudarte con nuestros servicios especializados en SEO",
      serviciosText: "Somos una agencia SEO en A Coruña, con amplia experiencia en el sector. Ayudamos a nuestros clientes mejorando la visibilidad de susnegocios en Google y aumentar el tráfico hacia su web.", 
      auditoria: "Nuestros expertos en SEO analizarán todos los aspectos técnicos, de contenido y autoridad de tu web y te entregarán un informe detallado con recomendaciones prácticas. No esperes más y pide tu auditoría SEO hoy mismo.",
      consultoria: "Analizamos todas las categorías del SEO (On Page, Off Page, técnico y de contenidos) y te ofrecemos un plan personalizado para optimizar tu web. No esperes más y solicita tu presupuesto sin compromiso.",
      local: "¿Quieres mejorar tu posicionamiento local y atraer más clientes a tu negocio? En nuestra agencia SEO te ofrecemos los mejores servicios de SEO Local para que tu web destaque en Google.",
      acompañamiento: "¿Necesitas rediseñar tu web y no sabes cómo hacerlo sin perder tu posicionamiento SEO? En nuestra agencia SEO en A Coruña te ayudamos a definir las nuevas URLs de tu web con un estudio previo de palabras clave y una arquitectura optimizada.",
      migracion: "En nuestra agencia SEO te ofrecemos el mejor servicio de cambio de arquitectura y redirecciones para que no pierdas tu ranking en Google. Solicita tu presupuesto sin compromiso y descubre cómo podemos ayudarte.",
      contenidos: "En nuestra agencia SEO en A Coruña te ofrecemos un servicio integral de redacción, optimización y difusión de contenidos adaptados a tu público objetivo y a las exigencias de los motores de búsqueda.", 
      ventajasHeading: "Descubre las ventajas de contar con una agencia SEO en A Coruña", 
      ventajasText: "Te ayudamos a comprender los conceptos básicos del SEO aplicándolos en tu proyecto mediante acciones personalizadas según tu marca, sector y un estudio de la competencia en las SERPs.",
      objetivos: "Nos proponemos objetivos claros y medibles para mejorar el posicionamiento de tu web en los buscadores. Hacemos que tu negocio crezca y consiga más clientes y ventas gracias a una estrategia SEO eficaz. Si quieres saber cómo podemos ayudarte, solicita una auditoría SEO gratuita y sin compromiso.",
      metodologias: "Nuestra metodología se adapta a las necesidades de cada cliente. Realizamos un estudio y análisis previo de tu sector, competencia y público objetivo para diseñar una estrategia SEO personalizada y eficaz. ¿Quieres saber más ? Contacta con nosotros y te informaremos sin compromiso.",
      seguimiento: "No solo diseñamos y ejecutamos estrategias personalizadas para cada cliente, sino que también hacemos un seguimiento constante del proyecto para medir los resultados y optimizar el rendimiento. Si quieres sabermás sobre cómo trabajamos y qué beneficios podemos aportarte, solicita una auditoría gratuita de tu web ahora mismo.",
      nosotrosHeading: "Equipo de expertos en posicionamiento web en A Coruña",
      nosotrosText: "Descubre cómo nuestro equipo de profesionales SEO puede ayudarte a mejorar tu posicionamiento web, aumentar tu tráfico y generar más ventas.",
      preguntasText: "¿Tienes dudas sobre el SEO y cómo puede ayudarte a mejorar tu negocio? En nuestra web encontrarás las respuestas que necesitas.",
      preguntas: [
              { 
              pregunta: "Aprovecha el SEO para impulsar tu negocio al éxito en Google",
              respuesta: [
                      "El SEO(Search Engine Optimization) es importante para tu negocio porque ayuda a mejorar la visibilidad de tu sitio web en los resultados de búsqueda de Google y otros similares. Esto te permite aumentar el tráfico cualificado hacia tu sitio web mejorando las oportunidades de convertir visitantes en clientes potenciales. Además, una buena estrategia SEO también puede ayudar a mejorar la confianza y la autoridad de tu sitio web dentro de tu sector.",
                      "Google ha sido el líder en el sector de búsquedas en Internet desde sus inicios. Su posición dominante le ha permitido acumular un gran volumen de datos y un gran volumen de usuarios, lo que le permite seguir mejorando sus servicios y ofrecer mejores resultados de búsqueda.",
                      "Por todo ello, el SEO te ayuda a llegar a más clientes potenciales y aumentar tus oportunidades de negocio."
                  ]
              },
              { pregunta: "Cuenta con la experiencia de la agencia SEO referente en A Coruña", 
              respuesta: [
                      "Con años de experiencia haciendo SEO a nuestros clientes, nos aseguramos de que tu sitio web alcance las mejores posiciones en los resultados de búsqueda de Google y atraiga a más clientes potenciales. Mejora tu presencia online con SEO Agency hoy mismo.",
                      "Nuestra agencia SEO en A Coruña te ayuda a mejorar tu posicionamiento y visibilidad de tu negocio en Google.",
                      "Algunas de las acciones que forman parte de una estrategia SEO acertada, incluyen:",
                      "Análisis e investigación de keywords adecuadas para tu sitio web y contenido, y optimizar tu sitio y contenido para esas palabras clave.",
                      "Definir una arquitectura web correcta y optimizada que permita el rastreo e indexación del proyecto, así como una navegación sencilla para el usuario.",
                      "Optimización de etiquetados HTML tanto en el head como en el body de cada URL de tu proyecto.",
                      "Asegurarnos de que tu sitio web esté optimizado para dispositivos móviles y tenga una velocidad de carga rápida (WPO).",
                      "Crear contenido de calidad y útil para tus visitantes.",
                      "Conseguir enlaces de calidad hacia el site (Backlinks) desde otros sitios relevantes dentro de tu sector.",
                      "Monitorizar tus resultados y medir el rendimiento de tu sitio web en los resultados de búsqueda.",
                      "Realizar cambios y ajustes según los resultados obtenidos.",
                      "Trabajando en conjunto podemos mejorar tu posicionamiento y visibilidad en Google y aumentar el tráfico y las oportunidades de negocio online."
                  ]
              },
              { pregunta: "Expertos en SEO On Page y Off Page", 
                respuesta: [
                      "Como expertos en SEO On Page, somos especialistas en optimizar la estructura y contenido de un sitio web para mejorar su posicionamiento en Google. Esto incluye el uso de palabras clave relevantes, la optimización de títulos y descripciones, la creación de contenido de calidad y relevante y la facilidad de navegación del sitio. Los expertos en SEO On Page trabajan para asegurar que un sitio web sea fácil de rastrear y comprender para los motores de búsqueda, lo que puede mejorar significativamente el posicionamiento y la visibilidad de una marca en las SERPs.",
                      "Cómo agencia experta en SEO, estamos al tanto de las últimas tendencias y actualizaciones en los algoritmos de los motores de búsqueda para asegurar que un sitio web sigue siendo relevante y visible.",
                      "Igualmente somos expertos en SEO Off Page ya que nos enfocamos en mejorar el posicionamiento de un site en Google mediante técnicas que no involucran directamente la optimización del sitio. Esto incluye la creación de enlaces de retroceso(backlinks) desde otros sitios web hacia el sitio en cuestión. Los backlinks son interpretados por Google como votos de confianza para un site, por ello tener estos enlaces desdeun sitio web de alta autoridad y relevancia puede ayudar a mejorar su posicionamiento en los resultados de búsqueda.",
                      "En SEO Agency nos ocupamos de mejorar el posicionamiento de tu sitio web en los motores de búsqueda mediante técnicas que no involucran directamente la optimización del site, como la creación de enlaces de retroceso (Backlinks), la optimización delas menciones y citas de un sitio web en medios digitales, así como en la gestión de la reputación en línea. Contratar a una agencia SEO con experiencia, es la mejor opción para mejorar el rendimiento de un sitio web en los motores de búsqueda y aumentar su tráfico cualificado."
                  ]
              },
              { pregunta: "Descubre nuestros servicios SEO", 
              respuesta: [
                      "Como agencia SEO en A Coruña, ofrecemos servicios para mejorar la visibilidad y el rendimiento de tu sitio web en los resultados de búsqueda de Google. Estos servicios incluyen:",
                      "Análisis de la estrategia y el rendimiento actual del sitio web",
                      "Investigación de keywords y optimización del contenido",
                      "Optimización técnica del sitio web, como el interlinking y la estructura del sitio",
                      "Generación de enlaces de retroceso de calidad(Backlinks)",
                      "Monitoreo y análisis de los resultados de búsqueda",
                      "Asesoramiento y capacitación para la mejora continua del rendimiento del sitio web.",
                      "En SEO Agency ayudamos a tu negocio a mejorar tu visibilidad en las SERPs y aumentar el tráfico orgánico. Como expertos en SEO con años de experiencia investigamos las palabras clave más significativas para tu sector, así como optimizar el sitio web para que aparezca en los resultados de búsqueda de Google(SEO On Page).",
                      "Monitorizamos y analizamos el rendimiento de tu sitio web para realizar aquellos cambios para mejorarlo. Además, nuestra agencia SEO te ayuda a construir una estrategia de contenido personalizada para traccionar más visitas y clientes potenciales hacia tu negocio web.",
                      "Contar con una agencia SEO en A Coruña puede ser una inversión valiosa para mejorar la visibilidad y el rendimiento de su negocio en línea."
                  ]
              }
          ]
      }
      }
      
      if (params.slug === 'alicante') {
        return { 
         title: 'Agencia de SEO en Alicante - Posicionamiento Orgánico',
         content: 'Welcome to our blog. Lorem ipsum dolor sit amet…',
         h1: 'Agencia SEO en Alicante',
         textoHeader: '¿Necesitas mejorar la visibilidad de tu sitio web y aumentar tus conversiones? Contar con una agencia SEO especializada en Alicante es la clave para alcanzar tus objetivos de proyecto online.',
         serviciosHeading: 'Descubre cómo podemos ayudarte con nuestros servicios especializados en SEO',
         serviciosText: 'Somos una agencia SEO en Alicante, con amplia experiencia en el sector. Ayudamos a nuestros clientes mejorando la visibilidad de sus negocios en Google y aumentar el tráfico hacia su web.',
         auditoria: 'Nuestros expertos en SEO analizarán todos los aspectos técnicos, de contenido y autoridad de tu web y te entregarán un informe detallado con recomendaciones prácticas. No esperes más y pide tu auditoría SEO hoy mismo.',
         consultoria: 'Analizamos todas las categorías del SEO (On Page, Off Page,técnico y de contenidos) y te ofrecemos un plan personalizado para optimizar tuweb. No esperes más y solicita tu presupuesto sin compromiso.',
         local: '¿Quieres mejorar tu posicionamiento local y atraer más clientes a tu negocio? En nuestra agencia SEO te ofrecemos los mejores servicios de SEO Local para que tu web destaque en Google.',
         acompañamiento: '¿Necesitas rediseñar tu web y no sabes cómo hacerlo sin perder tu posicionamiento SEO? En nuestra agencia SEO en Barcelona te ayudamos a definir las nuevas URLs de tu web con un estudio previo de palabras clave y una arquitectura optimizada.',
         migracion: 'En nuestra agencia SEO te ofrecemos el mejor servicio decambio de arquitectura y redirecciones para que no pierdas tu ranking en Google. Solicita tu presupuesto sin compromiso y descubre cómo podemos ayudarte.',
         contenidos: 'En nuestra agencia SEO en Alicante te ofrecemos un servicio integral de redacción, optimización y difusión de contenidos adaptados a tu público objetivo y a las exigencias de los motores de búsqueda.',
         ventajasHeading: 'Descubre las ventajas de contar con una agencia SEO en Alicante',
         ventajasText: 'Te ayudamos a comprender los conceptos básicos del SEO aplicándolos en tu proyecto mediante acciones personalizadas según tu marca, sector y un estudio de la competencia en las SERPs.',
         objetivos: 'Nos proponemos objetivos claros y medibles para mejorar elposicionamiento de tu web en los buscadores. Hacemos que tu negocio crezca yconsiga más clientes y ventas gracias a una estrategia SEO eficaz. Si quieressaber cómo podemos ayudarte, solicita una auditoría SEO gratuita y sincompromiso.',
         metodologias: 'Nuestra metodología se adapta a las necesidades de cada cliente. Realizamos un estudio y análisis previo de tu sector, competencia y público objetivo para diseñar una estrategia SEO personalizada y eficaz. ¿Quieres saber más? Contacta con nosotros y te informaremos sin compromiso.',
         seguimiento: 'No solo diseñamos y ejecutamos estrategias personalizadas para cada cliente, sino que también hacemos un seguimiento constante del proyecto para medir los resultados y optimizar el rendimiento. Si quieres saber más sobre cómo trabajamos y qué beneficios podemos aportarte, solicita una auditoría gratuita de tu web ahora mismo.', 
         nosotrosHeading: 'Equipo de expertos en posicionamiento web en Alicante', 
         nosotrosText: 'Descubre cómo nuestro equipo de profesionales SEO puede ayudarte a mejorar tu posicionamiento web, aumentar tu tráfico y generar más ventas.', 
         preguntasText: '¿Tienes dudas sobre el SEO y cómo puede ayudarte a mejorar tu negocio? En nuestra web encontrarás las respuestas que necesitas.',
         preguntas: [
          { 
            pregunta: "Mejora tu visibilidad en Google con nuestra agencia de SEO en Alicante", 
            respuesta: ["Con un equipo de expertos en posicionamiento web, te aseguramos una estrategia personalizada y efectiva que te lleve a los primeros resultados de Google. Nuestra agencia SEO en Alicante es una empresa especializada en la optimización de la visibilidad y posicionamiento de sitios web en los motores de búsqueda como Google. Utilizando técnicas y estrategias SEO personalizadas en función del sector profesional y el público objetivo, SEO Agency ayuda a las empresas a obtener más tráfico y conversiones.",
              "Una de las principales tareas de SEO Agency Alicante es la investigación de palabras clave. Esta investigación ayuda a identificar aquellas búsquedas de los usuarios en Google que son relevantes para tu negocio y a optimizar tu sitio web en función de estas keywords.",
              "La optimización del contenido es esencial para mejorar el posicionamiento de un sitio web. En SEO Agency nos esforzamos por garantizar que el contenido del sitio sea relevante, útil y de calidad para los usuarios, además de estar optimizado para las palabras clave relevantes.",
              "La estructura y arquitectura web también es importante para el posicionamiento, ya que los motores de búsqueda deben ser capaces de navegar y rastrear el sitio de manera eficiente. Nuestra agencia asegura que la estructura del sitio sea clara y fácil de navegar, además de estar optimizada para los motores de búsqueda.",
              "La velocidad de carga del sitio también es importante para el posicionamiento. Los motores de búsqueda premian a los sitios web que cargan rápidamente, ya que esto mejora la experiencia de usuario. La agencia SEO en Alicante se esfuerza por optimizar la velocidad de carga del sitio mediante la compresión de imágenes y la optimización del código."
              ] 
          }, 
          { 
            pregunta: "Contrata servicios SEO especializados para negocios en Alicante", 
            respuesta: ["Si eres dueño de una empresa en Alicante y estás buscando mejorar la visibilidad de tu sitio web, es probable que hayas escuchado hablar del SEO (Search Engine Optimization) y estés considerando aplicarlo para mejorar tu posicionamiento en los motores de búsqueda. Sin embargo, a pesar de haber oído hablar del SEO, es posible que no tengas una comprensión completa de lo que implica y cómo aplicarlo efectivamente en tu sitio web.",
              "El SEO es una técnica integral que busca mejorar la calidad y la relevancia de un sitio web, con el objetivo de obtener una mejor posición en los resultados de búsqueda de Google y otros buscadores similares. Esto se logra a través de una serie de técnicas que van desde la optimización del contenido hasta la optimización técnica del sitio web (SEO On Page), pasando por la creación de enlaces de calidad (SEO Off Page).",
              "Si deseas aplicar el SEO en tu sitio web, es recomendable contratar a un equipo de profesionales especializado en SEO para guiarte en el proceso y asegurar que estás implementando las técnicas correctas de manera efectiva. Contacta con SEO Agency y comienza a mejorar el tráfico orgánico a tu sitio web."]
          }, 
          { 
            pregunta: "¿Cómo ayuda el SEO a tu negocio online?", 
            respuesta: ["Una estrategia SEO bien elaborada puede ayudar a aumentar el tráfico hacia tu sitio web, mejorar la calidad del tráfico, aumentar la autoridad en línea, mejorar la experiencia del usuario y aumentar la rentabilidad de tu empresa.",
              "Aumento del tráfico: El SEO te ayuda a mejorar el posicionamiento de tu sitio web en los motores de búsqueda como Google, lo que a su vez aumenta el tráfico hacia tu sitio. Cuanto más alto esté tu web en los resultados de búsqueda, más usuarios lo visualizarán y visitarán.",
              "Mejora de la conversión: El SEO no solo aumenta el tráfico, sino que también mejora la calidad del tráfico. Al optimizar tu sitio para las palabras clave correctas, atraerás a usuarios cualificados que estén realmente interesadas en lo que ofreces, lo que aumentará las posibilidades de conversión.",
              "Aumento de la autoridad: El SEO también te ayuda a construir autoridad online. Cuanto mejor sea tu posicionamiento en los motores de búsqueda, más confianza tendrán los usuarios en tu sitio y en tu marca.",
              "Ahorro de costos: El SEO es una forma efectiva y asequible de mejorar el rendimiento de tu sitio web en línea. A diferencia de otras formas de publicidad en línea, como los anuncios pagados, el SEO es una inversión a largo plazo que puede proporcionar resultados sostenibles a largo plazo."]
          }, 
          { 
            pregunta: "Expertos en seo on page y off page", 
            respuesta: ["¿Has oído hablar del SEO on page y off page pero no sabes cómo aplicarlo? ¡No te preocupes! En SEO Agency somos expertos en SEO on page y off page para ayudarte a maximizar la visibilidad de tu sitio web y mejorar tu posicionamiento en los motores de búsqueda.",
              "El SEO on page hace referencia a las técnicas que se aplican dentro de tu sitio web para mejorar su calidad y relevancia. Esto incluye la optimización del contenido, la estructura del sitio web, la velocidad de carga, entre otros. Los expertos en SEO on page pueden ayudarte a asegurar que tu sitio web está cumpliendo con los estándares de calidad de los motores de búsqueda y que está optimizado para atraer a tu audiencia.",
              "Por otro lado, el SEO off page se refiere a las técnicas que se aplican fuera de tu sitio web para mejorar su posicionamiento. Esto incluye la creación de enlaces de calidad (Backlinks). Los expertos en SEO off page podemos ayudarte a asegurar que tu sitio web está siendo promocionado de manera efectiva en el mundo digital.",
              "Maximiza tu presencia en Google y atrae a más clientes potenciales con SEO Agency, la agencia SEO líder en Alicante. Ponte en contacto con nosotros hoy mismo para obtener una evaluación gratuita de tu sitio web y empezar a impulsar tu éxito en Google."]
          }
          ]
        }
      }







  throw error(404, 'Not found');
}